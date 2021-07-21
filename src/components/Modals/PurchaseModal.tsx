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

    const [input, setInput] = useState(new TokenAmount(ETH, BigInt(0)))
    const [output, setOutput] = useState(new TokenAmount(ETH, BigInt(0)))
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

    /**
     * Sets the input amount and calculates the output
     * @param value
     */
    const handleTypeInput = (value: string) => {
        const tokenAmount = new TokenAmount(ETH, expandValue(value, ETH));
        setInput(tokenAmount)
        calculateOutput(tokenAmount);
    }

    /**
     * Sets the output amount and calculates the input
     * @param value
     */
    const handleTypeOutput = (value: string) => {
        const tokenAmount = new TokenAmount(OWN, expandValue(value, OWN));
        setOutput(tokenAmount)
        calculateInput(tokenAmount)

    }

    /**
     * Calculates the input based on the output
     * @param tokenAmount
     */
    const calculateInput = (tokenAmount) => {
        const calculatedInput = new TokenAmount(ETH, expandValue(tokenAmount.multiply(tokenRate).toFixed(18), ETH));
        setInput(calculatedInput);

        return calculatedInput;
    }

    /**
     * Calculates the output based on the input
     * @param tokenAmount
     */
    const calculateOutput = (tokenAmount) => {
        const calculatedOutput = new TokenAmount(ETH, expandValue(tokenAmount.divide(tokenRate).toFixed(18), OWN));
        setOutput(calculatedOutput);

        return calculatedOutput;
    }

    /**
     * Validates if the max input does not exceed maxPayable and equivalent output does not exceed remainingSupply
     * @param tokenAmount
     */
    const validateMaxInput = (tokenAmount) => {
        if (tokenAmount.greaterThan(accountDetails.maxPayableAmount)) {
            tokenAmount = accountDetails.maxPayableAmount
        }

        if (calculateOutput(tokenAmount).greaterThan(remainingSupply)) {
            tokenAmount = calculateInput(remainingSupply)
        }

        return tokenAmount;
    }

    /**
     * Sets and checks the max input
     */
    const handleMaxInput = () => {
        let maxInput = accountDetails.balance;

        maxInput = validateMaxInput(maxInput);


        if (calculateOutput(maxInput).greaterThan(remainingSupply)) {
            maxInput = calculateInput(remainingSupply)
        }

        setInput(maxInput);
    }

    /**
     * Sets and checks the max output
     */
    const handleMaxOutput = () => {
        let maxOutput = remainingSupply;
        let equivalentInput = calculateInput(remainingSupply);

        if (equivalentInput.greaterThan(accountDetails.balance)) {
            equivalentInput = validateMaxInput(equivalentInput)
            maxOutput = calculateOutput(equivalentInput)
        }
        setOutput(maxOutput);
    }

    /**
     * Initiates buy token
     */
    const handleBuy = async () => {
        const tx = await contract.buyTokens({value: input.raw.toString()})
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


        getRemainingTokens().then(r => setRemainingSupply(r))
        getAccountDetails().then(r => setAccountDetails(r))
        contract.tokenRate().then(r => setTokenRate(new TokenAmount(OWN, r)))
        console.log(output.toExact())
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
                    value={input.toExact()}
                    onUserInput={handleTypeInput}
                    currency={token}
                    showMaxButton
                    onMax={handleMaxInput}
                />
                <CurrencyInputPanel
                    showMaxButton
                    onMax={handleMaxOutput}
                    label="To"
                    id="swap-input"
                    value={output.toExact()}
                    onUserInput={handleTypeOutput}
                    currency={project}
                    remainingSupply={remainingSupply.toExact()}
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
