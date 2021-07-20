import React, { useContext } from 'react';
import { Card, Text, Button, Progress, Flex, CardBody, CardHeader } from '@sparkpointio/sparkswap-uikit';
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core';
import { Globe, Twitter, Send } from 'react-feather';
import styled, { ThemeContext } from 'styled-components';
import { useSelectToken } from 'state/tokens/hooks';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import { StatusColor } from 'pages/styled';
import { IProjects } from '../../../config/constants/type';
import { ReactComponent as MediumIcon } from './icons/MediumIcon.svg';
import { StyledCardBody, StyledCardHeader, CardAction, Options, SocmedGroup, Details, ProgressGroup, DataGroup, StyledImage, StyledButton, StyledHeading} from './styled';
import Anchor, {StyledLink } from './StyledLink';


const LaunchCard: React.FC<IProjects> = ({
    address, buyingCoin, title, symbol,  image, wallpaperBg, desc, longDesc, price, progress, totalRaise, ownSale, status, socMeds
}) => {
    const { account } = useWeb3React();
    const token = useSelectToken(buyingCoin)
    const theme = useContext(ThemeContext);
    const percentage = ((progress / totalRaise) * 100).toFixed();
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;
    return (
        <Card style={{ padding: '5px' }}>
            <StyledCardHeader>
                <StyledImage src={srcs} alt="token-logo" />
                <StyledHeading bold>
                    {title}
                </StyledHeading>
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
                    {status === 'active' ? (
                        <StyledButton style={{ backgroundColor: StatusColor.live }}>LIVE NOW</StyledButton>
                    ) : status === 'upcoming' ? (
                        <StyledButton style={{ backgroundColor: StatusColor.upcoming }}>UPCOMING</StyledButton>
                    ) : (
                        <StyledButton style={{ backgroundColor: StatusColor.completed }}>COMPLETED</StyledButton>
                    )}
                </Options>
                <Details>
                    <div style={{ height: '70px', maxHeight: '80px', minHeight: '70px', marginBottom: '10px' }}>
                        <Text>{desc}</Text>
                    </div>
                    <ProgressGroup>
                        {status === 'completed' ? (
                            <Text as="h1">Sale Completion</Text>
                        ) : status === 'upcoming' ? (
                            <Text as="h1">Progress</Text>
                        ) : (
                            status === 'active' && (
                                <Text as="h1">Progress</Text>
                            )
                        )}
                    <Progress primaryStep={parseInt(percentage)} variant="flat" />
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">{percentage}%</Text>
                            <Text color="textSubtle">
                                {progress}&nbsp;/&nbsp;{totalRaise}
                                {token?.symbol}
                            </Text>
                        </Flex>
                    </ProgressGroup>
                    <DataGroup flexDirection="column">
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Total Raise</Text>
                            <Text>
                                {totalRaise} {token?.symbol}
                            </Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            {status === 'upcoming' ? (
                                <Text color="textSubtle">Coming Soon For Sale </Text>
                            ) : (
                                <Text color="textSubtle">OWN For Sale</Text>
                            )}
                            <Text>{ownSale === 0 ? '-' : ownSale}</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Buying Coin</Text>
                            <Text>{token?.symbol}</Text>
                        </Flex>
                    </DataGroup>
                </Details>
            </StyledCardBody>
            {status === 'active' && (
                <CardAction>
                    {!account ? (
                        <UnlockButton fullWidth />
                    ) : (
                        <StyledLink to={`/launch/projects/${address}`}>
                            Participate
                        </StyledLink>
                    )}
                </CardAction>
            )}
        </Card>
    );
};

export default LaunchCard;
