import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { TokenAmount } from '@sparkpointio/sparkswap-sdk';
import { ExternalLink } from 'react-feather';
import { toast } from 'react-toastify';
import { useFindProjectByAddress } from 'state/hooks';
import { useSelectToken } from 'state/tokens/hooks';
import CurrencyInputPanel from 'components/CurrencyInputPanel';
import { Button, Flex, Heading, Modal, Text } from '@sparkpointio/sparkswap-uikit';
import styled, { ThemeContext } from 'styled-components';
import { SmallstyledImage } from 'pages/Launchpad/components/styled';
import { useLaunchpadContract } from '../../hooks/useContracts';
import { BNB } from '../../config';
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import { expandValue } from '../../utils';
import { getAccountDetailsLaunchPad } from '../../utils/contractHelpers';


interface Stats {
    totalForSaleTokens: string;
    totalSoldTokens: string;
    remainingForSale: string;
    totalSales: string;
    expectedSales: string;
    percentage: string;
    tokenRate: string;
    totalParticipants: string;
}

interface AppProps {
    onDismiss?: () => void;
    address: string | null | undefined;
    stats: Stats;
    category: string;
}

const ToastTitle = styled(Text)`
  color: #EAE2FC;
  margin-bottom: 4px;
`;
const StyledHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.textSubtle};
`;
const ActionDiv = styled(Flex)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const PurchaseModal: React.FC<AppProps> = ({ onDismiss, address, category }) => {
    const { library } = useActiveWeb3React();
    const { account } = useWeb3React();
    const contract = useLaunchpadContract(category);
    const project = useFindProjectByAddress(address);
    const token = useSelectToken(project.buyingCoin.address);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [accountDetails, setAccountDetails] = useState({
        balance: new TokenAmount(project.buyingCoin, BigInt(0)),
        amount: new TokenAmount(project.sellingCoin, BigInt(0)),
        maxPayableAmount: new TokenAmount(project.sellingCoin, BigInt(0)),
        rewardedAmount: new TokenAmount(project.sellingCoin, BigInt(0)),
        redeemed: false,
        whitelist: false,
    });

    const [tokenRate, setTokenRate] = useState(new TokenAmount(project.sellingCoin, BigInt(0)));
    const [remainingExpendable, setRemainingExpendable] = useState(new TokenAmount(project.sellingCoin, BigInt(0)));
    const [remainingPurchasable, setRemainingPurchasable] = useState(new TokenAmount(project.sellingCoin, BigInt(0)));
    /**
     * Sets the input amount and calculates the output
     * @param value
     */
    const handleTypeInput = (value: string) => {
        setInput(value);
        let tokenAmount = new TokenAmount(project.buyingCoin, expandValue(value, project.buyingCoin));
        tokenAmount = validateInput(tokenAmount);
        calculateOutput(tokenAmount);
    };

    /**
     * Sets the output amount and calculates the input
     * @param value
     */
    const handleTypeOutput = (value: string) => {
        setOutput(value);
        let tokenAmount = new TokenAmount(project.sellingCoin, expandValue(value, project.sellingCoin));
        tokenAmount = validateOutput(tokenAmount);
        calculateInput(tokenAmount);
    };

    /**
     * Calculates the input based on the output
     * @param tokenAmount
     */
    const calculateInput = (tokenAmount) => {
        const calculatedInput = new TokenAmount(project.buyingCoin, expandValue(tokenAmount.multiply(tokenRate).toFixed(18), project.buyingCoin));
        setInput(calculatedInput.toExact());

        return calculatedInput;
    };

    /**
     * Calculates the output based on the input
     * @param tokenAmount
     */
    const calculateOutput = (tokenAmount) => {
        const calculatedOutput = new TokenAmount(project.buyingCoin, expandValue(tokenAmount.divide(tokenRate).toFixed(18), project.buyingCoin));
        setOutput(calculatedOutput.toExact());

        return calculatedOutput;
    };

    /**
     * Validates if the input does not exceed remainingExpandable and equivalent output does not exceed remainingPurchasable
     * @param tokenAmount
     */
    const validateInput = (tokenAmount) => {
        const equivalentOutput = calculateOutput(tokenAmount);

        if (equivalentOutput.greaterThan(remainingPurchasable)) {
            tokenAmount = calculateInput(remainingPurchasable);
            calculateOutput(tokenAmount);
        }

        return tokenAmount;
    };

    /**
     * Validates if the output does not exceed remainingPurchasable and equivalent input does not exceed remainingExpandable
     * @param tokenAmount
     */
    const validateOutput = (tokenAmount) => {
        const equivalentInput = calculateInput(tokenAmount);

        if (equivalentInput.greaterThan(remainingExpendable)) {
            tokenAmount = calculateOutput(remainingExpendable);
            calculateInput(tokenAmount);
        }

        return tokenAmount;
    };

    /**
     * Sets and checks the max input
     */
    const handleMaxInput = () => {
        let maxInput = remainingExpendable;

        maxInput = validateInput(maxInput);

        setInput(maxInput.toExact());
    };

    /**
     * Sets and checks the max output
     */
    const handleMaxOutput = () => {
        let maxOutput = remainingPurchasable;

        maxOutput = validateOutput(maxOutput);

        setOutput(maxOutput.toExact());
    };

    /**
     * Initiates buy token
     */

    const SuccessMessage = ({ tx, value, symbol }) => {
        const theme = useContext(ThemeContext);
        const { hash } = tx;
        const link = `https://bscscan.com/tx/${hash}`;
        return (
            <Flex alignItems='center' flexDirection='column'>
                <ToastTitle>{`Successfully bought ~ ${value} ${symbol} tokens!`}</ToastTitle>
                <a href={link} style={{ fontSize: '12px', textDecoration: 'underline', color: theme.colors.primary }}>View
                    on BscScan <ExternalLink size='12px' /></a>
            </Flex>
        );
    };

    const handleBuy = async () => {
        try {
            const tx = await contract.buyTokens({ value: expandValue(input, BNB) });
            toast.success(<SuccessMessage tx={tx} value={output} symbol={project.symbol} />, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            const res = await getAccountDetailsLaunchPad(contract, project, library, account);
            setAccountDetails(res);
            setInput('');
            setOutput('');
        } catch (e) {
            const code = e.code;
            const message = e.data ? e.data.message : e.message;
            toast.error(`${code} ${message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        // console.log(tx);
        // console.log(`Buying successful ${tx}`)
    };

    useEffect(() => {
        async function getRemainingPurchasable() {
            const details = await contract.getWhitelist(account);
            const maxPayableAmount = new TokenAmount(project.sellingCoin, details._maxPayableAmount);
            const rewardedAmount = new TokenAmount(project.sellingCoin, details._rewardedAmount);
            return maxPayableAmount.subtract(rewardedAmount);
        }

        const calc = (num) => {
            return num.match(/^-?\d+(?:\.\d{0,18})?/)[0];
        };


        const calculateMaxExpendable = (remainingP) => {
            return new TokenAmount(project.buyingCoin, expandValue(calc(remainingP.multiply(tokenRate).toFixed(19)), project.buyingCoin));
        };


        const calculateMaxPurchasable = (remainingP) => {
            const tokenAmount = new TokenAmount(project.buyingCoin, expandValue(calc(remainingP.divide(tokenRate).toFixed(19)), project.sellingCoin));
            return tokenAmount;
        };

        getAccountDetailsLaunchPad(contract, project, library, account).then((r) => setAccountDetails(r));
        contract.tokenRate().then((r) => setTokenRate(new TokenAmount(project.buyingCoin, r)));
        getRemainingPurchasable().then((r) => {
            const _balance = new TokenAmount(project.sellingCoin, (r.raw.toString()));
            setRemainingPurchasable(_balance);
            setRemainingExpendable(calculateMaxExpendable(_balance));
        }).catch(e => console.log(e));

        return () => console.log('');
    }, [account, contract, library, input, output, tokenRate, project]);

    useEffect(() => {
        return console.log('');
    }, []);

    return (
        <Modal title='' onDismiss={onDismiss}>
            <div style={{ width: '400px', padding: '0px 24px 24px 24px' }}>
                <div style={{ marginBottom: '24px', marginTop: '-24px' }}>
                    <Heading bold fontSize='21px'>
                        Swap Coins
                    </Heading>
                    <StyledHeading>{`Remaining: ${remainingPurchasable.toExact()} ${project.symbol}`}</StyledHeading>
                </div>
                <CurrencyInputPanel
                    label='From'
                    id='swap-input'
                    value={input}
                    onUserInput={handleTypeInput}
                    currency={token}
                    showMaxButton
                    onMax={handleMaxInput}
                    remainingSupply={project.symbol === 'ORE' ? 'No Limit' : remainingExpendable.toExact()}
                />
                <CurrencyInputPanel
                    showMaxButton
                    onMax={handleMaxOutput}
                    label='To'
                    id='swap-input'
                    value={output}
                    onUserInput={handleTypeOutput}
                    currency={project}
                    remainingSupply={project.symbol === 'ORE' ? 'No Limit' : remainingPurchasable.toExact()}
                />

                {/* <Text>Price per BNB: <Priceperbnb/> USD</Text> */}
                <Text color='#FFFFFF'>{`Price: ${tokenRate.toExact()} ${project.symbol} per BNB `}</Text>

                <ActionDiv>
                    <Button onClick={handleBuy} fullWidth>
                        Swap
                    </Button>
                </ActionDiv>
                <ActionDiv>
                    <Text>My Allocations</Text>
                    <Flex alignItems='center' marginTop='12px'>
                        <SmallstyledImage
                            src={`${process.env.PUBLIC_URL}/images/icons/${project?.symbol?.toLowerCase()}.png`} />
                        <Text color='textSubtle'>{`${accountDetails.rewardedAmount.toExact()} ${project.symbol}`}</Text>
                    </Flex>
                </ActionDiv>
            </div>
        </Modal>
    );
};

export default PurchaseModal;
