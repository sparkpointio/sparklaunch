import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Flex, Progress, Text, useModal } from '@sparkpointio/sparkswap-uikit';
import { TokenAmount } from '@sparkpointio/sparkswap-sdk';
import { useWeb3React } from '@web3-react/core';
import { Globe, Send, Twitter } from 'react-feather';
import { ThemeContext } from 'styled-components';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import ClaimModal from 'components/Modals/ClaimModal';
import { IProjects, STATE } from 'config/constants/type';
import { useLaunchpadContract } from 'hooks/useContracts';
import { calculateLaunchpadStats, checkEnded, getRedeem } from 'utils/contractHelpers';
import Timer from 'pages/Home/HeaderSection/timer';
import { ReactComponent as MediumIcon } from './icons/MediumIcon.svg';
import {
    CardAction,
    DataGroup,
    Details,
    Options,
    ProgressGroup,
    SocmedGroup,
    StyledButton,
    StyledCardBody,
    StyledCardHeader,
    StyledHeading,
    StyledImage,
    TimerButton,
} from './styled';
import Anchor, { StyledLink } from './StyledLink';

const LaunchCard: React.FC<IProjects> = (project) => {
    const {
        category2,
        category,
        address,
        buyingCoin,
        sellingCoin,
        token,
        title,
        image,
        wallpaperBg,
        desc,
        ownSale,
        status,
        socMeds,
        symbol,
        claimable,
        startDate,
        endDate,
    } = project;
    const theme = useContext(ThemeContext);
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;

    const [stats, setStats] = useState({
        totalForSaleTokens: '00.00',
        remainingForSale: '00.00',
        totalSales: '00.00',
        expectedSales: '00.00',
        percentage: '00.00',
        totalSoldTokens: '00.00',
    });

    const [redeemable, setRedeemable] = useState(false);
    const [redeemable1, setRedeemable1] = useState(false);
    const { account } = useWeb3React();
    const contract = useLaunchpadContract(category);
    const cat2 = category2 ?? category;
    const contract2 = useLaunchpadContract(cat2);

    useEffect(() => {
        checkEnded(contract, contract2).then((ended) => {
            if (!ended.round1) {
                calculateLaunchpadStats(contract, project).then((r) => setStats(r));
            }
            if (ended.round1 && project.category2 && !ended.round2) {
                calculateLaunchpadStats(contract2, project).then((r) => setStats(r));
            }
            if (ended.round1 && project.category2 && ended.round2){
                calculateLaunchpadStats(contract, project, contract2).then((r) => setStats(r));
            }
        }).catch(e => console.log(e));
    }, [contract, category2, category, contract2, project]);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // Pass the value to the modal here
    // Todo: change to actual value and add token name for the image
    const [accountDetails, setAccountDetails] = useState({
        r1: {
            token: '',
            amount: '',
        },
        r2: {
            token: '',
            amount: '',
        },
    });
    useEffect(() => {
        setAccountDetails({
            r1: {
                token: symbol,
                amount: '0',
            },
            r2: {
                token: symbol,
                amount: '0',
            },
        });

        const calc = (num) => {
            return num.match(/^-?\d+(?:\.\d{0,18})?/)[0];
        };

        getRedeem(contract, account).then((r) => {
            setRedeemable(parseInt(r.amount) === 0 ? false : r.redeemable);
            getRedeem(contract2, account).then((r1) => {
                setRedeemable1(parseInt(r1.amount) === 0 && !category2 ? false : r1.redeemable);
                setAccountDetails({
                    r1: {
                        token: symbol,
                        amount: new TokenAmount(token, r.amount).toExact(),
                    },
                    r2: {
                        token: symbol,
                        amount: new TokenAmount(token, r1.amount).toExact(),
                    },
                });
            });
        });
    }, [contract, contract2, project, account, symbol, token, category2]);

    const [onClaimR1Modal] = useModal(<ClaimModal rewards={accountDetails.r1} contract={contract} project={project}
                                                  setRedeemable={setRedeemable} />);
    const [onClaimR2Modal] = useModal(<ClaimModal rewards={accountDetails.r2} contract={contract2} project={project}
                                                  setRedeemable={setRedeemable1} />);

    const percentage = parseFloat(stats.percentage).toFixed(4);
    const totalSales = status !== STATE.upcoming ? parseFloat(stats.totalSales).toFixed(4) : 0;
    const totalSoldTokens = parseFloat(stats.totalSoldTokens)
        .toFixed(4)
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    const remainingForSale = parseFloat(stats.remainingForSale)
        .toFixed(4)
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    const expectedSales = status !== STATE.upcoming ? parseFloat(stats.expectedSales).toFixed(2) : 0;
    return (
        <Card style={{ padding: '5px' }}>
            <StyledCardHeader src={srcsBg}>
                <StyledImage src={srcs} alt='token-logo' />
                <StyledHeading bold>{title}</StyledHeading>
            </StyledCardHeader>
            <StyledCardBody>
                <Options>
                    <SocmedGroup>
                        <Anchor href={socMeds?.[0]}>
                            <Globe size='24px' />
                        </Anchor>
                        <Anchor href={socMeds?.[1]}>
                            <Twitter size='24px' fill={theme.colors.text} />
                        </Anchor>
                        <Anchor href={socMeds?.[2]}>
                            <Send size='24px' fill={theme.colors.text} />
                        </Anchor>
                        <Anchor href={socMeds?.[3]}>
                            <SvgIcon width={24} Icon={MediumIcon} />
                        </Anchor>
                    </SocmedGroup>
                    <StyledButton status={status}>{status.toUpperCase()}</StyledButton>
                </Options>
                {status === STATE.upcoming ? (
                    <ProgressGroup>
                        {/* <TimerButton>${sellingCoin.symbol} Going Live in:&nbsp; <Timer/></TimerButton> */}
                        {!startDate ? (
                            <TimerButton> Going Live Soon! </TimerButton>
                        ) : (
                            <TimerButton>
                                {' '}
                                <Timer startDate={startDate} endDate={endDate} />
                            </TimerButton>
                        )}
                    </ProgressGroup>
                ) : (
                    <br />
                )}

                <Details>
                    <div
                        style={{
                            height: '70px',
                            maxHeight: '80px',
                            minHeight: '70px',
                            marginBottom: `${status === STATE.upcoming ? '10px' : '30px'}`,
                            marginTop: `${status === STATE.upcoming ? '10px' : '-25px'}`,
                        }}
                    >
                        <Text>{desc}</Text>
                    </div>
                    <ProgressGroup>
                        <Text as='h1'>{status === STATE.completed ? 'Sale Completion' : 'Progress'}</Text>
                        <Progress primaryStep={parseFloat(status !== STATE.upcoming ? percentage : '0')}
                                  variant='flat' />
                        <Flex justifyContent='space-between'>
                            <Text color='textSubtle'>{status !== STATE.upcoming ? percentage : '0'}%</Text>
                            <Text color='textSubtle'>
                                {totalSales} / {expectedSales} {buyingCoin.symbol}
                                {/* 261.33 / 261.33 {buyingCoin.symbol} */}
                            </Text>
                        </Flex>
                    </ProgressGroup>
                    <DataGroup flexDirection='column'>
                        {status === STATE.active && <Flex justifyContent='space-between'>
                            <Text color='textSubtle'>Current Round</Text>
                            <Text>{
                                status === STATE.upcoming ?
                                    '-' :
                                    <>{category2 ? 'Round 2' : 'Round 1'}</>
                            }</Text>
                        </Flex>}

                        <Flex justifyContent='space-between'>
                            <Text color='textSubtle'>Total Raised</Text>
                            <Text>{
                                status === STATE.upcoming ?
                                    '-' :
                                    <>{totalSales} {buyingCoin.symbol}</>
                            }</Text>
                        </Flex>

                        <Flex justifyContent='space-between'>
                            <Text color='textSubtle'>
                                {status === STATE.upcoming && 'Coming Soon For Sale'}
                                {status === STATE.completed && <>${sellingCoin.symbol} Sold</>}
                                {status === STATE.active && <>${sellingCoin.symbol} For Sale</>}
                            </Text>
                            <Text>
                                {status === STATE.upcoming && '-'}
                                {status === STATE.completed && <>{stats.totalSoldTokens === '0' ? '-' : totalSoldTokens}</>}
                                {status === STATE.active && <>{stats.remainingForSale === '0' ? '-' : stats.totalForSaleTokens}</>}
                            </Text>
                        </Flex>

                        <Flex justifyContent='space-between'>
                            <Text color='textSubtle'>Buying Coin</Text>
                            {status === STATE.upcoming ? (
                                <Text>{buyingCoin.symbol}</Text>
                            ) : (
                                <Text>{buyingCoin.symbol}</Text>
                            )}
                        </Flex>
                    </DataGroup>
                </Details>
            </StyledCardBody>
            {status === STATE.active &&
            <CardAction>
                {!account ? (
                    <UnlockButton fullWidth />
                ) : (
                    <StyledLink to={`/projects/${address}`}>
                        <h1 style={{ color: 'white' }}>Participate</h1>
                    </StyledLink>
                )}
            </CardAction>}

            {status === STATE.completed && claimable &&
                <CardAction flexDirection='column'>
                    <StyledLink to={`/projects/${address}`}>Read More</StyledLink>
                    {!account ? (
                        <UnlockButton fullWidth />
                    ) : (
                        <Flex style={{ justifyContent: 'space-around', columnGap: '5px' }}>
                            <Button disabled={!redeemable} fullWidth onClick={onClaimR1Modal}>Claim R1</Button>
                            <Button disabled={!redeemable1} fullWidth onClick={onClaimR2Modal}>Claim R2</Button>
                        </Flex>
                    )}
                </CardAction>
            }

            {status === STATE.completed && !claimable &&
            <CardAction flexDirection='column'>
                <StyledLink to={`/projects/${address}`}>Read More</StyledLink>
                {/* Function to check if user has participated */}
                <Text style={{ marginTop: '15px' }}>
                    Thank you for participating in the IDO sale! Your {symbol} tokens will be sent shortly
                    to your wallet address
                </Text>
            </CardAction>}

            {status === STATE.upcoming && (claimable || !claimable) &&
            <CardAction flexDirection='column'>
                <StyledLink to={`/projects/${address}`}>Read More</StyledLink>
            </CardAction>}

        </Card>
    );
};

export default LaunchCard;
