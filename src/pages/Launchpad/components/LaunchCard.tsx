import React, { useContext } from 'react';
import { Card, Text, Button, Progress, Flex } from '@sparkpointio/sparkswap-uikit';
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core';
import { Globe, Twitter, Send } from 'react-feather';
import styled, { ThemeContext } from 'styled-components';
import PlaceHolder from 'pages/Home/AboutSection/icons';
import UnlockButton from 'components/ConnectWalletButton';
import SvgIcon from 'components/SvgIcon';
import { IProjects } from './type';
import { ReactComponent as MediumIcon } from './icons/MediumIcon.svg';

const Img = styled.img`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-right: 15px;
`;

const CardHeader = styled(Flex)`
    padding: 20px;
    align-items: center;
`;
const CardBody = styled(Flex)`
    flex-direction: column;
    text-align: left;
    padding: 15px;
`;

const CardAction = styled(Flex)`
    padding: 25px 15px;
`;

const Options = styled(Flex)`
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`;

const SocmedGroup = styled(Flex)`
    flex: 0.7;
    justify-content: space-between;
`;

const Details = styled(Flex)`
    flex-direction: column;
    min-height: 300px;
    justify-content: space-between;
`;
const ProgressGroup = styled(Flex)`
    flex-direction: column;
    margin: 15px 0px;
`;

const DataGroup = styled(Flex)`
    & > * {
        margin: 5px 0px;
    }
`;

const StyledButton = styled(Button)`
    cursor: context-menu;
    height: 35px;
    border-radius: 5px;
`;

const LaunchCard: React.FC<IProjects> = ({
    title,
    image,
    desc,
    progress,
    totalRaise,
    ownSale,
    buyingCoin,
    socMeds,
    wallpaperBg,
    status,
}) => {
    const { account } = useWeb3React();
    const theme = useContext(ThemeContext);
    const percentage = ((progress / totalRaise) * 100).toFixed();
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;
    return (
        <Card style={{ padding: '5px' }}>
            <CardHeader>
                <Img src={srcs} alt="token-logo" />
                <Text bold fontSize="24px">
                    {title}
                </Text>
            </CardHeader>
            <CardBody>
                <Options>
                    <SocmedGroup>
                        <a href={`https://www.${socMeds?.[0]}`}>
                            <Globe size="24px" />
                        </a>
                        <a href={`https://www.${socMeds?.[1]}`}>
                            <Twitter size="24px" fill={theme.colors.text} />
                        </a>
                        <a href={`https://www.${socMeds?.[2]}`}>
                            <Send size="24px" fill={theme.colors.text} />
                        </a>
                        <a href={`https://www.${socMeds?.[3]}`}>
                            <SvgIcon width={24} Icon={MediumIcon} />
                        </a>
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
            </CardBody>
            {status === 'active' && (
                <CardAction>
                    {!account ? (
                        <UnlockButton fullWidth />
                    ) : (
                        <Button as={Link} to="/launch" fullWidth style={{ backgroundColor: '#32a31b' }}>
                            Participate
                        </Button>
                    )}
                </CardAction>
            )}
        </Card>
    );
};

export default LaunchCard;
