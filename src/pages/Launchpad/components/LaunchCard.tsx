import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Card, Flex, Progress, Text, Button, useModal} from '@sparkpointio/sparkswap-uikit';
import { TokenAmount } from '@sparkpointio/sparkswap-sdk';
import { useWeb3React } from '@web3-react/core';
import { Globe, Send, Twitter } from 'react-feather';
import { BNB, OWN } from 'config';
import { ThemeContext } from 'styled-components';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import ClaimModal from 'components/Modals/ClaimModal';
import { StatusColor } from 'pages/styled';
import { IProjects, STATE } from 'config/constants/type';
import { useLaunchpadContract } from 'hooks/useContracts';
import { calculateLaunchpadStats, getRedeem } from 'utils/contractHelpers';
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
    // const { category, address, buyingCoin, sellingCoin, title, image, wallpaperBg, desc, totalRaise, ownSale, status, socMeds } = project;
    const { category, address, buyingCoin, sellingCoin, title, image, wallpaperBg, desc, totalRaise, ownSale, status, claimable, socMeds } = project;

    const [stats, setStats] = useState({
        totalForSaleTokens: '00.00',
        remainingForSale: '00.00',
        totalSales: '00.00',
        expectedSales: '00.00',
        percentage: '00.00',
        totalSoldTokens: '00.00'
    });

    const [redeemable, setRedeemable] = useState(false)
    const [redeemable1, setRedeemable1] = useState(false)

    const { account } = useWeb3React();
    const contract = useLaunchpadContract(category);
    const contract1 = useLaunchpadContract("ownlyLaunchPad1");
    const theme = useContext(ThemeContext);
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;

    useEffect(() => {
        calculateLaunchpadStats(contract, project).then((r) => setStats(r));
    }, [contract, contract1, project, account]);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    // Pass the value to the modal here 
    // Todo: change to actual value and add token name for the image
    const [accountDetails, setAccountDetails] = useState({
        r1: {
            token: '',
            amount: '',
        },
        r2: {
            token: '',
            amount: ''
        }
    });

    useEffect(() => {
        setAccountDetails({
            r1: {
                token: 'OWN',
                amount: '5000'
            },
            r2: {
                token: 'NWO',
                amount: '10000'
            }
        })

        const calc = (num) => {
            return num.match(/^-?\d+(?:\.\d{0,18})?/)[0]
        }
        

                
        getRedeem(contract, account).then((r) => {
            setRedeemable(parseInt(r.amount) === 0 ? false : r.redeemable) 
            getRedeem(contract1, account).then((r1) => {
                setRedeemable1(parseInt(r1.amount) === 0 ? false : r1.redeemable)
                setAccountDetails({
                    r1: {
                        token: 'OWN',
                        amount: new TokenAmount(OWN, r1.amount).toExact()
                    },
                    r2: {
                        token: 'OWN',
                        amount: new TokenAmount(OWN, r.amount).toExact()
                    }
                })
                console.log(r1.amount === 0)
            })
        })
        
    }, [contract, contract1, project, account])

    
    const [ onClaimR1Modal ] = useModal(<ClaimModal rewards={accountDetails.r1} contract={contract1} />)
    const [ onClaimR2Modal ] = useModal(<ClaimModal rewards={accountDetails.r2} contract={contract} />)
    
    const percentage = parseFloat(stats.percentage).toFixed(4)
    const totalSales = parseFloat(stats.totalSales).toFixed(4)
    const totalSoldTokens = parseFloat(stats.totalSoldTokens).toFixed(4).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const remainingForSale = parseFloat(stats.remainingForSale).toFixed(4).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const expectedSales = parseFloat(stats.expectedSales).toFixed(2)

    return (
        <Card style={{ padding: '5px' }}>
            <StyledCardHeader src={srcsBg}>
                <StyledImage src={srcs} alt="token-logo" />
                <StyledHeading bold>{title}</StyledHeading>
            </StyledCardHeader>
            <StyledCardBody>
                <Options>
                    <SocmedGroup>
                        <Anchor href={socMeds?.[0]}>
                            <Globe size="24px" />
                        </Anchor>
                        <Anchor href={socMeds?.[1]}>
                            <Twitter size="24px" fill={theme.colors.text} />
                        </Anchor>
                        <Anchor href={socMeds?.[2]}>
                            <Send size="24px" fill={theme.colors.text} />
                        </Anchor>
                        <Anchor href={socMeds?.[3]}>
                            <SvgIcon width={24} Icon={MediumIcon} />
                        </Anchor>
                    </SocmedGroup>
                    {status === STATE.active ? (
                        <StyledButton style={{ backgroundColor: StatusColor.live }}>LIVE NOW</StyledButton>
                    ) : status === STATE.upcoming ? (
                        <StyledButton style={{ backgroundColor: StatusColor.upcoming }}>UPCOMING</StyledButton>
                    ) : (
                        <StyledButton style={{ backgroundColor: StatusColor.completed }}>COMPLETED</StyledButton>
                    )}
                </Options>
                    {status === STATE.upcoming ? (
                        <ProgressGroup>
                            {/* <TimerButton>${sellingCoin.symbol} Going Live in:&nbsp; <Timer/></TimerButton> */}
                            {address === "0x005"? 
                            <TimerButton> Going Live Soon! </TimerButton> :
                            <TimerButton> Going Live in:&nbsp; <Timer/></TimerButton>
                            }
                        </ProgressGroup>    
                    ) : status === STATE.active ? (
                        <ProgressGroup/>
                    ) : (
                        <ProgressGroup/>
                    )}
                <Details>
                    {status === STATE.active ? (
                        <div style={{height: '70px', maxHeight: '80px', minHeight: '70px', marginBottom: '30px', marginTop: '-25px'}}>
                            <Text>{desc}</Text>
                        </div>
                    ) : status === STATE.upcoming ? (
                        <div style={{height: '70px', maxHeight: '80px', minHeight: '70px', marginBottom: '10px', marginTop: '10px'}}>
                            <Text>{desc}</Text>
                        </div>
                        ) : (
                        <div style={{height: '70px', maxHeight: '80px', minHeight: '70px', marginBottom: '30px', marginTop: '-25px'}}>
                            <Text>{desc}</Text>
                        </div>
                    )}
                    <ProgressGroup>
                        {status === STATE.completed ? (
                            <Text as="h1">Sale Completion</Text>
                        ) : status === STATE.upcoming ? (
                            <Text as="h1">Progress</Text>
                        ) : (
                            <Text as="h1">Progress</Text>
                        )}

                        {status === STATE.upcoming ? (
                            <Progress primaryStep={0} variant="flat" />
                        ) : (
                            <Progress primaryStep={parseFloat(percentage)} variant="flat" />
                        )}

                        {status === STATE.upcoming ? (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle" fontSize="90%">{0}%</Text>
                                <Text color="textSubtle" fontSize="90%">
                                    {/* {0} / {totalRaise} {buyingCoin.symbol} */}
                                    {0} / 0 {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        ) : (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle">{percentage}%</Text>
                                <Text color="textSubtle">
                                   {/* {totalSales} / {expectedSales} {buyingCoin.symbol} */}
                                    261.33 / 261.33 {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        )}          

                    </ProgressGroup>
                    <DataGroup flexDirection="column">

                        {status === STATE.upcoming ? (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle">Total Raised</Text>
                                <Text>
                                    {/* {0} {buyingCoin.symbol} */}
                                    -
                                </Text>
                            </Flex>
                        ) : (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle">Total Raised</Text>
                                <Text>
                                    261.33 {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        )}

                        <Flex justifyContent="space-between">
                        {status === STATE.upcoming ? (
                            <Text color="textSubtle">Coming Soon For Sale</Text>
                        ) : status === STATE.completed ? (
                            <Text color="textSubtle">${sellingCoin.symbol} Sold</Text>
                        ) : (
                            <Text color="textSubtle">${sellingCoin.symbol} For Sale</Text>
                        )}

                        {status === STATE.upcoming ? (
                            // <Text>{numberWithCommas(ownSale)} {sellingCoin.symbol}</Text>
                            <Text> - </Text>
                        ) : status === STATE.completed ? (
                            <Text>{stats.totalSoldTokens === '0' ? '-' : totalSoldTokens}</Text>
                        ) : (
                            <Text>{stats.remainingForSale === '0' ? '-' : remainingForSale}</Text>
                        )}
                        </Flex>
                        
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Buying Coin</Text>
                            {status === STATE.upcoming ? <Text>{buyingCoin.symbol}</Text> : <Text>{buyingCoin.symbol}</Text>}
                        </Flex>
                    </DataGroup>
                </Details>
            </StyledCardBody>
            {status === STATE.active? (
                <CardAction>
                    {!account ? (
                        <UnlockButton fullWidth />
                    ) : (
                        <StyledLink to={`/projects/${address}`}>
                            <h1 style={{ color: 'white' }}>Participate</h1>
                        </StyledLink>
                    )}
                </CardAction>
            ) : status === STATE.completed && claimable ?
                (
                    <CardAction flexDirection="column">
                        <StyledLink to={`/projects/${address}`}>Read More</StyledLink>
                        <Flex style={{ justifyContent: 'space-around', columnGap: '5px' }}>
                            {redeemable1 ?
                                <Button onClick={onClaimR1Modal}>Claim R1</Button>
                                : <Button fullWidth disabled>Claim R1</Button>}
                            {redeemable ?
                                <Button onClick={onClaimR2Modal}>Claim R2</Button>
                                : <Button fullWidth disabled>Claim R2</Button>}
                        </Flex>
                    </CardAction>
                    ) : status === STATE.completed && !claimable &&
                    <CardAction flexDirection="column">
                        <StyledLink to={`/projects/${address}`}>Read More</StyledLink>
                        {/* Function to check if user has participated */}
                        <Text style={{ marginTop: '15px' }}>
                            Thank you for participating in the IDO sale! Your {sellingCoin.symbol} tokens will be sent shortly to your wallet address
                        </Text>
                    </CardAction>
            }
        </Card>
    );
};

export default LaunchCard;
