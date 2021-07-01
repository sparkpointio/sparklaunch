import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { Globe, Twitter, Send } from 'react-feather';
import {
    Card,
    Flex,
    Heading,
    Button,
    CardBody,
    CardHeader,
    Text,
    Progress,
    CardFooter,
} from '@sparkpointio/sparkswap-uikit';
import { useAccountWhiteList } from 'state/hooks';
import PlaceHolder from 'pages/Home/AboutSection/icons';
import SvgIcon from 'components/SvgIcon';
import UnlockButton from 'components/ConnectWalletButton';
import { StyledHr2 as Divider } from 'components/Divider';
import { CustomThemeContext } from 'ThemeContext';
import { SocmedGroup, ProgressGroup, DataGroup } from '../components/styled';
import { ReactComponent as MediumIcon } from '../components/icons/MediumIcon.svg';
import Anchor from '../components/StyledLink';
import FooterDetails from './FooterDetails';

const CCont = styled(Card)`
    width: 100%;
`;
const CHeader = styled(CardHeader)`
    display: flex;
    align-items: center;
    height: auto;
    min-height: 10vh;
    max-height: 15vh;
`;
const TokenImage = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 10px 15px;
`;

const CBody = styled(CardBody)`
    padding: 20px;
`;

const StyledButton = styled(Button)`
    cursor: context-menu;
    height: 35px;
    border-radius: 5px;
`;

const CustomDataGroup = styled(DataGroup)`
    &:before {
        content: '';
        border-top: 5px solid ${({ theme }) => theme.colors.primary};
        padding-top: 10px;
        margin-bottom: 10px;
    }
    &:after {
        content: '';
        border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
        padding-bottom: 10px;
        margin-top: 10px;
    }
`;

const CFooter = styled(Flex)`
    width: 100%;
    min-height: 20vh;
    height: auto;
    padding: 25px;
`;

const Allocations: React.FC = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Text>My Allocations</Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TokenImage src={PlaceHolder} alt="token-logo" />
                <Text bold>0.0 OWNLY</Text>
            </div>
        </div>
    );
};

const ActionCard: React.FC<{ account?: string | null; whiteListed?: boolean }> = ({ account, whiteListed }) => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);
    return (
        <CardBody
            style={{
                width: '100%',
                backgroundColor: theme.isDark? customTheme.customColors?.BG1 : customTheme.customColors?.BG2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}
        >
            <ProgressGroup>
                <Text bold as="h1" fontSize="24px">
                    79% OWNLY Sold
                </Text>
                <Progress primaryStep={79} variant="flat" />
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">79%</Text>
                    <Text color="textSubtle">118.0 / 150.0 BNB</Text>
                </Flex>
            </ProgressGroup>
            <CustomDataGroup flexDirection="column">
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">OWNLY Price</Text>
                    <Text>0.00000090900 BNB</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">OWNLY Sold</Text>
                    <Text>129,835,369.01</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">Total Raise</Text>
                    <Text>150 BNB</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="primary">My Allocation</Text>
                    <Text>Nan OWNLY</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="primary">Max BNB Swap</Text>
                    <Text>N/A BNB</Text>
                </Flex>
            </CustomDataGroup>
            {!account ? (
                <div style={{ marginTop: '15px', padding: '10px 0px' }}>
                    <UnlockButton fullWidth />
                </div>
            ) : !whiteListed ? (
                <Allocations />
            ) : (
                <h1>Yes</h1>
            )}
        </CardBody>
    );
};

const ProjectComponent: React.FC = (props) => {
    const { account } = useWeb3React();
    const [whiteListed, setWhiteList] = useState(false);
    const acc = useAccountWhiteList(account);

    useEffect(() => {
        if (acc[0][0]) {
            setWhiteList(true);
        } else setWhiteList(false);
    }, [acc]);

    const theme = useContext(ThemeContext);
    return (
        <CCont>
            <CHeader>
                <TokenImage src={PlaceHolder} alt="token-image" />
                <Heading bold fontSize="24px">
                    Ownly
                </Heading>
            </CHeader>
            <CBody>
                <Flex justifyContent="space-between">
                    <Flex flex="1" flexDirection="column" padding="10px">
                        <Flex alignItems="center" justifyContent="space-between" marginBottom="10px" padding="10px 0px">
                            <SocmedGroup>
                                <Anchor href="Google.com">
                                    <Globe />
                                </Anchor>
                                <Anchor href="Twitter.com">
                                    <Twitter fill={theme.colors.text} />
                                </Anchor>
                                <Anchor href="Telegram.org">
                                    <Send fill={theme.colors.text} />
                                </Anchor>
                                <Anchor href="Medium.com">
                                    <SvgIcon width={24} Icon={MediumIcon} />
                                </Anchor>
                            </SocmedGroup>
                            <StyledButton style={{ backgroundColor: '#32a31b' }}>LIVE NOW</StyledButton>
                        </Flex>
                        <Text color="textSubtle" as="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Neque viverra justo nec ultrices dui sapien. Ut venenatis
                            tellus in metus vulputate eu scelerisque felis. Arcu bibendum at varius vel pharetra.
                            Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Neque viverra justo nec ultrices dui sapien. Ut venenatis tellus in metus
                            vulputate eu scelerisque felis. Arcu bibendum at varius vel pharetra. Egestas sed tempus
                            urna et pharetra pharetra massa massa ultricies. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
                            viverra justo nec ultrices dui sapien. Ut venenatis tellus in metus vulputate eu scelerisque
                            felis. Arcu bibendum at varius vel pharetra. Egestas sed tempus urna et pharetra pharetra
                            massa massa ultricies.
                        </Text>
                    </Flex>
                    <Flex flex="1">
                        <ActionCard account={account} whiteListed={whiteListed} />
                    </Flex>
                </Flex>
            </CBody>
            <CFooter>
                <FooterDetails />
            </CFooter>
        </CCont>
    );
};

export default ProjectComponent;
