import React, {useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {TokenAmount} from "@sparkpointio/sparkswap-sdk";
import {parseUnits} from "@ethersproject/units";
import {useFindProjectByAddress} from "state/hooks";
import {useSelectToken} from "state/tokens/hooks";
import CurrencyInputPanel from "components/CurrencyInputPanel";
import {Button, Flex, Heading, Modal, Text} from "@sparkpointio/sparkswap-uikit";
import styled from "styled-components";
import {SmallstyledImage} from 'pages/Launchpad/components/styled';
import {useOwnlyLaunchpad} from '../../hooks/useContracts'
import {ETH, OWN} from "../../config";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import {expandValue} from "../../utils";


interface AppProps {
    onDismiss?: () => void
    address: string | null | undefined
}

const StyledHeading = styled(Text)`
    color: ${({theme}) => theme.colors.textSubtle};
`
const ActionDiv = styled(Flex)`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`

const PurchaseModal: React.FC<AppProps> = ({onDismiss, address}) => {
    const {library} = useActiveWeb3React()
    const {account} = useWeb3React()
    const contract = useOwnlyLaunchpad()

    const project = useFindProjectByAddress(address);
    const token = useSelectToken(project.buyingCoin);

    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [accountDetails, setAccountDetails] = useState({
        balance: new TokenAmount(ETH, BigInt(0)),
        amount: new TokenAmount(OWN, BigInt(0)),
        maxPayableAmount: new TokenAmount(OWN, BigInt(0)),
        rewardedAmount: new TokenAmount(OWN, BigInt(0)),
        redeemed: false,
        whitelist: false,
    })

    const [tokenRate, setTokenRate] = useState(new TokenAmount(OWN, BigInt(0)))
    const [remainingSupply, setRemainingSupply] = useState(new TokenAmount(OWN, BigInt(0)))
    const [remainingPurchasable, setRemainingPurchasable] = useState(new TokenAmount(OWN, BigInt(0)))

    /**
     * Sets the input amount and calculates the output
     * @param value
     */
    const handleTypeInput = (value: string) => {
        setInput(value)
        let tokenAmount = new TokenAmount(ETH, expandValue(value, ETH));
        tokenAmount = validateInput(tokenAmount)
        calculateOutput(tokenAmount);
    }

    /**
     * Sets the output amount and calculates the input
     * @param value
     */
    const handleTypeOutput = (value: string) => {
        setOutput(value)
        let tokenAmount = new TokenAmount(OWN, expandValue(value, OWN));
        tokenAmount = validateOutput(tokenAmount)
        calculateInput(tokenAmount)

    }

    /**
     * Calculates the input based on the output
     * @param tokenAmount
     */
    const calculateInput = (tokenAmount) => {
        const calculatedInput = new TokenAmount(ETH, expandValue(tokenAmount.multiply(tokenRate).toFixed(18), ETH));
        setInput(calculatedInput.toExact());

        return calculatedInput;
    }

    /**
     * Calculates the output based on the input
     * @param tokenAmount
     */
    const calculateOutput = (tokenAmount) => {
        const calculatedOutput = new TokenAmount(ETH, expandValue(tokenAmount.divide(tokenRate).toFixed(18), OWN));
        setOutput(calculatedOutput.toExact());

        return calculatedOutput;
    }

    /**
     * Validates if the input does not exceed maxPayable and equivalent output does not exceed remainingSupply
     * @param tokenAmount
     */
     const validateInput = (tokenAmount) => {
        if (tokenAmount.greaterThan(accountDetails.maxPayableAmount)) {
            tokenAmount = accountDetails.maxPayableAmount
        }

        if (calculateOutput(tokenAmount).greaterThan(remainingSupply)) {
            tokenAmount = calculateInput(remainingSupply)
            calculateOutput(tokenAmount)
        }

        return tokenAmount;
    }

    /**
     * Validates if the output does not exceed maxPayable and equivalent output does not exceed remainingSupply
     * @param tokenAmount
     */
    const validateOutput = (tokenAmount) => {
        let equivalentInput = calculateInput(tokenAmount);

        if (equivalentInput.greaterThan(accountDetails.balance)) {
            equivalentInput = validateInput(equivalentInput)
            tokenAmount = calculateOutput(equivalentInput)
        }

        return tokenAmount;
    }

    /**
     * Sets and checks the max input
     */
    const handleMaxInput = () => {
        let maxInput = new TokenAmount(ETH, expandValue(remainingPurchasable.multiply(tokenRate).toFixed(18), OWN));

        maxInput = validateInput(maxInput);

        setInput(maxInput.toExact());
    }

    /**
     * Sets and checks the max output
     */
    const handleMaxOutput = () => {
        let maxOutput = remainingPurchasable;

        maxOutput = validateOutput(maxOutput);

        setOutput(maxOutput.toExact());
    }

    /**
     * Initiates buy token
     */
    const handleBuy = async () => {
        const tx = await contract.buyTokens({value: expandValue(input, ETH)})
        console.log(tx);
        console.log(`Buying successful ${tx}`)
    }

    useEffect(() => {
        async function getRemainingTokens() {
            let totalTokens = await contract.getTotalToken();
            let soldAmount = await contract.soldAmount();
            totalTokens = new TokenAmount(OWN, totalTokens)
            soldAmount = new TokenAmount(OWN, soldAmount)
            return totalTokens.subtract(soldAmount)
        }

        async function getAccountDetails() {
            const details = await contract.getWhitelist(account)
            return {
                balance: new TokenAmount(ETH, (await library.getBalance(account)).toBigInt()),
                amount: new TokenAmount(OWN, details._amount),
                maxPayableAmount: new TokenAmount(OWN, details._maxPayableAmount),
                rewardedAmount: new TokenAmount(OWN, details._rewardedAmount),
                redeemed: details._redeemed,
                whitelist: details._whitelist,
            };
        }

        async function getRemainingPurchasable() {
            const details = await contract.getWhitelist(account);
            const totalAllocation = new TokenAmount(OWN, details._maxPayableAmount)
            const purchasableAmount = new TokenAmount(OWN, details._rewardedAmount)
            return totalAllocation.subtract(purchasableAmount)
        }


        getRemainingTokens().then(r => setRemainingSupply(r))
        getAccountDetails().then(r => setAccountDetails(r))
        getRemainingPurchasable().then(r => setRemainingPurchasable(r))
        contract.tokenRate().then(r => setTokenRate(new TokenAmount(OWN, r)))
    }, [account, contract, library, input, output]);


    return (
        <Modal title="" onDismiss={onDismiss}>
            <div style={{width: '400px', padding: '0px 24px 24px 24px'}}>
                <div style={{marginBottom: '24px', marginTop: '-24px'}}>
                    <Heading bold fontSize="21px">Swap Coins</Heading>
                    <StyledHeading>Max. Allocation is {project.symbol}</StyledHeading>
                </div>
                <CurrencyInputPanel
                    label="From"
                    id="swap-input"
                    value={input}
                    onUserInput={handleTypeInput}
                    currency={token}
                    showMaxButton
                    onMax={handleMaxInput}
                    remainingSupply={new TokenAmount(ETH, expandValue(remainingPurchasable.multiply(tokenRate).toFixed(18), OWN)).toExact()}
                />
                <CurrencyInputPanel
                    showMaxButton
                    onMax={handleMaxOutput}
                    label="To"
                    id="swap-input"
                    value={output}
                    onUserInput={handleTypeOutput}
                    currency={project}
                    remainingSupply={remainingPurchasable.toExact()}
                />
                <ActionDiv>
                    <Button onClick={handleBuy} fullWidth>Swap</Button>
                </ActionDiv>
                <ActionDiv>
                    <Text>My Allocations</Text>
                    <Flex alignItems="center" marginTop="12px">
                        <SmallstyledImage src={`${process.env.PUBLIC_URL}/images/icons/${project?.symbol}.png`}/>
                        <Text color="textSubtle">0.0 {project.symbol}</Text>
                    </Flex>
                </ActionDiv>
            </div>
        </Modal>
    )
}

export default PurchaseModal;
