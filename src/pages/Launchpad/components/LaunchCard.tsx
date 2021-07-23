import React, {useContext, useEffect, useState} from 'react';
import {Card, Flex, Progress, Text} from '@sparkpointio/sparkswap-uikit';
import {useWeb3React} from '@web3-react/core';
import {Globe, Send, Twitter} from 'react-feather';
import {ThemeContext} from 'styled-components';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import {StatusColor} from 'pages/styled';
import {IProjects} from '../../../config/constants/type';
import {ReactComponent as MediumIcon} from './icons/MediumIcon.svg';
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
    StyledImage
} from './styled';
import Anchor, {StyledLink} from './StyledLink';
import {useLaunchpadContract} from "../../../hooks/useContracts";
import {calculateLaunchpadStats} from "../../../utils/contractHelpers";


const LaunchCard: React.FC<IProjects> = (project) => {
    const {
        category,
        address,
        buyingCoin,
        title,
        image,
        wallpaperBg,
        desc,
        ownSale,
        status,
        socMeds
    } = project;

    const [stats, setStats] = useState({
        totalForSaleTokens: '-',
        remainingForSale: '-',
        totalSales: '-',
        expectedSales: '-',
        percentage: '-'
    })
    const {account} = useWeb3React();
    const contract = useLaunchpadContract(category)

    const theme = useContext(ThemeContext);
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;

    useEffect(() => {
        calculateLaunchpadStats(contract, project).then(r => setStats(r));
    }, [contract, project])

    return (
        <Card style={{padding: '5px'}}>
            <StyledCardHeader src={srcsBg}>
                <StyledImage src={srcs} alt="token-logo"/>
                <StyledHeading bold>
                    {title}
                </StyledHeading>
            </StyledCardHeader>
            <StyledCardBody>
                <Options>
                    <SocmedGroup>
                        <Anchor href={socMeds?.[0]}>
                            <Globe size="24px"/>
                        </Anchor>
                        <Anchor href={socMeds?.[1]}>
                            <Twitter size="24px" fill={theme.colors.text}/>
                        </Anchor>
                        <Anchor href={socMeds?.[2]}>
                            <Send size="24px" fill={theme.colors.text}/>
                        </Anchor>
                        <Anchor href={socMeds?.[3]}>
                            <SvgIcon width={24} Icon={MediumIcon}/>
                        </Anchor>
                    </SocmedGroup>
                    {status === 'active' ? (
                        <StyledButton style={{backgroundColor: StatusColor.live}}>LIVE NOW</StyledButton>
                    ) : status === 'upcoming' ? (
                        <StyledButton style={{backgroundColor: StatusColor.upcoming}}>UPCOMING</StyledButton>
                    ) : (
                        <StyledButton style={{backgroundColor: StatusColor.completed}}>COMPLETED</StyledButton>
                    )}
                </Options>
                <Details>
                    <div style={{height: '70px', maxHeight: '80px', minHeight: '70px', marginBottom: '10px'}}>
                        <Text>{desc}</Text>
                    </div>
                    <ProgressGroup>
                        {status === 'completed' ? (
                            <Text as="h1">Sale Completion</Text>
                        ) : status === 'upcoming' ? (
                            <Text as="h1">Progress</Text>
                        ) : (
                            <Text as="h1">Progress</Text>
                        )}

                        <Progress primaryStep={parseInt(stats.percentage)} variant="flat"/>
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">{stats.percentage}%</Text>
                            <Text color="textSubtle">
                                {stats.totalSales} / {stats.expectedSales} {buyingCoin.symbol}
                            </Text>
                        </Flex>
                    </ProgressGroup>
                    <DataGroup flexDirection="column">
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Total Raised</Text>
                            <Text>
                                {stats.totalSales} {buyingCoin.symbol}
                            </Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            {status === 'upcoming' ? (
                                <Text color="textSubtle">Coming Soon For Sale </Text>
                            ) : (
                                <Text color="textSubtle">OWN For Sale</Text>
                            )}
                            <Text>{ownSale === 0 ? '-' : stats.remainingForSale}</Text>
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
                        <UnlockButton fullWidth/>
                    ) : (
                        <StyledLink to={`/launch/projects/${address}`}>
                            <h1 style={{color: 'white'}}>Participate</h1>
                        </StyledLink>
                    )}
                </CardAction>
            )}
        </Card>
    );
};

export default LaunchCard;
