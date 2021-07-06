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
import { useAccountWhiteList, useGetPoolsByAddress } from 'state/hooks';
import { IProjects } from 'config/constants/type';
import PlaceHolder from 'pages/Home/AboutSection/icons';
import SvgIcon from 'components/SvgIcon';
import UnlockButton from 'components/ConnectWalletButton';
import { StyledHr2 as Divider } from 'components/Divider';
import { CustomThemeContext } from 'ThemeContext';
import { SocmedGroup, ProgressGroup } from '../components/styled';
import { ReactComponent as MediumIcon } from '../components/icons/MediumIcon.svg';
import Anchor from '../components/StyledLink';
import FooterDetails from './FooterDetails';
import { CCont, CHeader, TokenImage, CBody, StyledButton, CustomDataGroup, CFooter } from './styled'


export type AppProps = {
    project: IProjects;
};

type ActionProps = AppProps & {account?: string | null; whiteListed?: boolean}

const Allocations: React.FC<{tokenImage:string; symbol: string}> = ({tokenImage, symbol}) => {
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${tokenImage}`;
    return (
        <div style={{ marginTop: '20px' }}>
            <Text>My Allocations</Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TokenImage src={srcs} alt="token-logo" />
                <Text bold>0.0 {symbol}</Text>
            </div>
        </div>
    );
};

const ActionCard: React.FC<ActionProps> = ({ account, whiteListed, project }) => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);

    const tokenReport = { 
        title: `${project.progress} ${project.symbol} token`,
        progress: project.price * project.progress,
        percentage: parseInt((((project.progress * project.price) / project.totalRaise) * 100).toFixed()),
        standing: `${(project.progress * project.price)} / ${project.totalRaise} ${project.buyingCoin}`,
        tokenPrice: `${project.price} ${project.buyingCoin}`
    }

    return (
        <CardBody
            style={{
                width: '100%',
                backgroundColor: theme.isDark ? customTheme.customColors?.BG1 : customTheme.customColors?.BG2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}
        >
            <ProgressGroup>
                <Text bold as="h1" fontSize="24px">
                    {tokenReport.title} Sold
                </Text>
                <Progress primaryStep={tokenReport.percentage} variant="flat" />
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">{tokenReport.percentage}%</Text>
                    <Text color="textSubtle">{tokenReport.standing}</Text>
                </Flex>
            </ProgressGroup>
            <CustomDataGroup flexDirection="column">
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">OWNLY Price</Text>
                    <Text>{project.price}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">OWNLY Sold</Text>
                    <Text>{project.progress}</Text>
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
                <Allocations tokenImage={project.image} symbol={project.symbol} />
            ) : (
                <>
                <Allocations tokenImage={project.image} symbol={project.symbol} />
                <Button fullWidth style={{marginTop: '10px'}}>Purchase {project.symbol}</Button>
                </>
            )}
        </CardBody>
    );
};


const ProjectComponent: React.FC<AppProps> = ({ project }) => {
    const { account } = useWeb3React();
    const [whiteListed, setWhiteList] = useState(false);
    const acc = useAccountWhiteList(account);
    const pool = useGetPoolsByAddress(project.address);
    const { title, image, longDesc, progress, totalRaise, ownSale, buyingCoin, socMeds, wallpaperBg, status, address } =
        project;
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;
    useEffect(() => {
        if (acc[0][0]) {
            setWhiteList(true);
        } else setWhiteList(false);
    }, [acc]);

    const theme = useContext(ThemeContext);
    return (
        <CCont>
            <CHeader>
                <TokenImage src={srcs} alt="token-image" />
                <Heading bold fontSize="24px">
                    {title}
                </Heading>
            </CHeader>
            <CBody>
                <Flex justifyContent="space-between">
                    <Flex flex="1" flexDirection="column" padding="10px">
                        <Flex alignItems="center" justifyContent="space-between" marginBottom="10px" padding="10px 0px">
                            <SocmedGroup>
                                <Anchor href={socMeds?.[0]}>
                                    <Globe />
                                </Anchor>
                                <Anchor href={socMeds?.[1]}>
                                    <Twitter fill={theme.colors.text} />
                                </Anchor>
                                <Anchor href={socMeds?.[2]}>
                                    <Send fill={theme.colors.text} />
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
                        </Flex>
                        <Text color="textSubtle" as="p">
                            {longDesc}
                        </Text>
                    </Flex>
                    <Flex flex="1">
                        <ActionCard 
                        account={account} 
                        whiteListed={whiteListed}
                        project={project}
                        />
                    </Flex>
                </Flex>
            </CBody>
            <CFooter>
                <FooterDetails pool={pool?.[0]} project={project} />
            </CFooter>
        </CCont>
    );
};

export default ProjectComponent;
