import React, { useContext, useEffect, useState } from 'react';
import { Card, Flex, Progress, Text } from '@sparkpointio/sparkswap-uikit';
import { useWeb3React } from '@web3-react/core';
import { Globe, Send, Twitter } from 'react-feather';
import { ThemeContext } from 'styled-components';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import { StatusColor } from 'pages/styled';
import { IProjects, STATE } from 'config/constants/type';
import { useLaunchpadContract } from 'hooks/useContracts';
import { calculateLaunchpadStats } from 'utils/contractHelpers';
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
    const { category, address, buyingCoin, sellingCoin, title, image, wallpaperBg, desc, totalRaise, ownSale, status, socMeds } = project;

    const [stats, setStats] = useState({
        totalForSaleTokens: '00.00',
        remainingForSale: '00.00',
        totalSales: '00.00',
        expectedSales: '00.00',
        percentage: '00.00',
    });
    const { account } = useWeb3React();
    const contract = useLaunchpadContract(category);
    const theme = useContext(ThemeContext);
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;

    useEffect(() => {
        calculateLaunchpadStats(contract, project).then((r) => setStats(r));
    }, [contract, project]);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
   
    const percentage = parseFloat(stats.percentage).toFixed(4)
    const totalSales = parseFloat(stats.totalSales).toFixed(4)
    const remainingForSale = parseFloat(stats.remainingForSale).toFixed(4)
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
                            <TimerButton>${sellingCoin.symbol} Going Live in:&nbsp; <Timer/></TimerButton>
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
                                <Text color="textSubtle">{0}%</Text>
                                <Text color="textSubtle">
                                    {0} / {totalRaise.toFixed(4)} {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        ) : (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle">{percentage}%</Text>
                                <Text color="textSubtle">
                                    {totalSales} / {stats.expectedSales} {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        )}          

                    </ProgressGroup>
                    <DataGroup flexDirection="column">

                        {status === STATE.upcoming ? (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle">Total Raised</Text>
                                <Text>
                                    {0} {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        ) : (
                            <Flex justifyContent="space-between">
                                <Text color="textSubtle">Total Raised</Text>
                                <Text>
                                    {totalSales} {buyingCoin.symbol}
                                </Text>
                            </Flex>
                        )}

                        <Flex justifyContent="space-between">
                        {status === STATE.upcoming ? (
                            <Text color="textSubtle">Coming Soon For Sale</Text>
                        ) : (
                            <Text color="textSubtle">${sellingCoin.symbol} For Sale</Text>
                        )}

                        {status === STATE.upcoming ? (
                            <Text>{numberWithCommas(ownSale)} {sellingCoin.symbol}</Text>
                        ) : (
                            <Text>{stats.remainingForSale === '0' ? '-' : remainingForSale}</Text>
                        )}
                        </Flex>
                        
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Buying Coin</Text>
                            <Text>{buyingCoin.symbol}</Text>
                        </Flex>
                    </DataGroup>
                </Details>
            </StyledCardBody>
            {status === 'active' && (
                <CardAction>
                    {!account ? (
                        <UnlockButton fullWidth />
                    ) : (
                        <StyledLink to={`/projects/${address}`}>
                            <h1 style={{ color: 'white' }}>Participate</h1>
                        </StyledLink>
                    )}
                </CardAction>
            )}
        </Card>
    );
};

export default LaunchCard;
