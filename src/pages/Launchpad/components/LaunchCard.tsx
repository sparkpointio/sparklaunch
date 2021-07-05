import React, { useContext } from 'react';
import { Card, Text, Button, Progress, Flex, CardBody, CardHeader } from '@sparkpointio/sparkswap-uikit';
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core';
import { Globe, Twitter, Send } from 'react-feather';
import styled, { ThemeContext } from 'styled-components';
import PlaceHolder from 'pages/Home/AboutSection/icons';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import { IProjects } from '../../../config/constants/type';
import { ReactComponent as MediumIcon } from './icons/MediumIcon.svg';
import { StyledCardBody, StyledCardHeader, CardAction, Options, SocmedGroup, Details, ProgressGroup, DataGroup, StyledImage, StyledButton} from './styled';
import Anchor, {StyledLink } from './StyledLink';

const LaunchCard: React.FC<IProjects> = ({
    address, buyingCoin, title, symbol,  image, wallpaperBg, desc, longDesc, price, progress, totalRaise, ownSale, status, socMeds
}) => {
    const { account } = useWeb3React();
    const theme = useContext(ThemeContext);
    const percentage = ((progress / totalRaise) * 100).toFixed();
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;
    return (
        <Card style={{ padding: '5px' }}>
            <StyledCardHeader>
                <StyledImage src={srcs} alt="token-logo" />
                <Text bold fontSize="24px">
                    {title}
                </Text>
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
                        <StyledButton style={{ backgroundColor: '#32a31b' }}>LIVE NOW</StyledButton>
                    ) : status === 'upcoming' ? (
                        <StyledButton style={{ backgroundColor: '#7a1ba3' }}>UPCOMING</StyledButton>
                    ) : (
                        <StyledButton style={{ backgroundColor: '#8e98a5' }}>COMPLETED</StyledButton>
                    )}
                </Options>
                <Details>
                    <div style={{ height: '70px', maxHeight: '80px', minHeight: '70px', marginBottom: '10px' }}>
                        <Text>{desc}</Text>
                    </div>
                    <ProgressGroup>
                        <Text as="h1">Progress</Text>
                        <Progress primaryStep={parseInt(percentage)} variant="flat" />
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">{percentage}%</Text>
                            <Text color="textSubtle">
                                {progress}&nbsp;/&nbsp;{totalRaise}
                                {buyingCoin}
                            </Text>
                        </Flex>
                    </ProgressGroup>
                    <DataGroup flexDirection="column">
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Total Raise</Text>
                            <Text>
                                {totalRaise} {buyingCoin}
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
                            <Text>{buyingCoin}</Text>
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
