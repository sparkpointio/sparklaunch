import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import {TokenAmount} from "@sparkpointio/sparkswap-sdk";
import styled, { ThemeContext } from 'styled-components';
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
    useModal,
} from '@sparkpointio/sparkswap-uikit';
import { useAccountWhiteList, useFindProjectByAddress, useGetPoolsByAddress, useFindProject } from 'state/hooks';
import { IProjects, ITokens, STATE } from 'config/constants/type';
import SvgIcon from 'components/SvgIcon';
import UnlockButton from 'components/ConnectWalletButton';
import { StyledHr2 as Divider } from 'components/Divider';
import PurchaseModal from 'components/Modals/PurchaseModal';
import { CustomThemeContext } from 'ThemeContext';
import { SocmedGroup, ProgressGroup } from '../components/styled';
import { ReactComponent as MediumIcon } from '../components/icons/MediumIcon.svg';
import Anchor from '../components/StyledLink';
import FooterDetails from './FooterDetails';
import { CCont, CHeader, TokenImage, SmalltokenImage, CBody, StyledButton, CustomDataGroup, CFooter, TextDescription } from './styled'
import {calculateLaunchpadStats, getAccountDetailsLaunchPad} from "../../../utils/contractHelpers";
import {useLaunchpadContract} from "../../../hooks/useContracts";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {BNB, OWN} from "../../../config";



type AppProps = {
    project: IProjects
}
type ActionProps = AppProps & {account?: string | null; whiteListed?: boolean}

const Allocations: React.FC<{tokenImage:string; symbol: string; allocation:string}> = ({tokenImage, symbol, allocation}) => {
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${tokenImage}`;
    return (
        <div style={{ marginTop: '20px' }}>
            <Text>My Allocations</Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SmalltokenImage src={srcs} alt="token-logo" />
                <Text bold>{allocation} {symbol}</Text>
            </div>
        </div>
    );
};

const ActionCard: React.FC<ActionProps> = ({ account, whiteListed, project}) => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);
    const Paddress = useFindProject();
    const [ onPurchaseModal ] = useModal(<PurchaseModal address={Paddress} />)
    const [stats, setStats] = useState({
        totalForSaleTokens: '-',
        totalSoldTokens: '-',
        remainingForSale: '-',
        totalSales: '-',
        expectedSales: '-',
        percentage: '-',
        tokenRate: '-'
    })
    const [accountDetails, setAccountDetails] = useState({
        balance: new TokenAmount(project.buyingCoin, BigInt(0)),
        amount: new TokenAmount(project.sellingCoin, BigInt(0)),
        maxPayableAmount: new TokenAmount(project.sellingCoin, BigInt(0)),
        maxExpendable: new TokenAmount(project.buyingCoin, BigInt(0)),
        rewardedAmount: new TokenAmount(project.sellingCoin, BigInt(0)),
        redeemed: false,
        whitelist: false,
    })
    const {library} = useActiveWeb3React();

    const contract = useLaunchpadContract(project.category)

    useEffect(() => {
        calculateLaunchpadStats(contract, project).then(r => setStats(r));
        getAccountDetailsLaunchPad(contract, project, library, account).then(r => setAccountDetails(r)).catch(console.log)
    }, [contract, project, account, library])

    const tokenReport = {
        title: `${project.progress} ${project.symbol}`,
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
                    {stats.totalSoldTokens} {project.sellingCoin.name} Sold
                </Text>
                <Progress primaryStep={parseInt(stats.percentage)} variant="flat" />
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">{stats.percentage}%</Text>
                    <Text color="textSubtle">
                        {stats.totalSales} / {stats.expectedSales} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
            </ProgressGroup>
            <CustomDataGroup flexDirection="column">
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">OWNLY Price</Text>
                    <Text>{stats.tokenRate} {project.buyingCoin.symbol}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">OWNLY Sold</Text>
                    <Text>{stats.totalSoldTokens} {project.sellingCoin.symbol}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">Total Raised</Text>
                    <Text>{stats.totalSales} {project.buyingCoin.symbol}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="primary">Max Allocation</Text>
                    <Text>{accountDetails.maxPayableAmount.toExact()} {project.sellingCoin.symbol}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="primary">Max BNB</Text>
                    <Text>{accountDetails.maxExpendable.toExact()} BNB</Text>
                </Flex>
            </CustomDataGroup>
            {!account ? (
                <div style={{ marginTop: '15px', padding: '10px 0px' }}>
                    <UnlockButton fullWidth />
                </div>
            ) : !whiteListed ? (
                <Allocations tokenImage={project.image} symbol={project.symbol} allocation={accountDetails.rewardedAmount.toExact()}/>
            ) : (
                <>
                <Allocations tokenImage={project.image} symbol={project.symbol} allocation={accountDetails.rewardedAmount.toExact()} />
                <Button onClick={onPurchaseModal} fullWidth style={{marginTop: '10px'}}>Purchase {project.symbol}</Button>
                </>
            )}
        </CardBody>
    );
};


const ProjectComponent: React.FC = () => {
    const { account } = useWeb3React();
    const [whiteListed, setWhiteList] = useState(false);
    const Paddress = useFindProject();
    const project = useFindProjectByAddress(Paddress);
    const userAddress = account? account.toLowerCase() : '';
    const acc = useAccountWhiteList(userAddress);
    const pool = useGetPoolsByAddress(Paddress);
    const { title, image, longDesc, longDesc2, longDesc3, buyingCoin, socMeds, wallpaperBg, status } = project;
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;


    useEffect(() => {
        if (acc[0][0]) {
            setWhiteList(true);
        } else setWhiteList(false);
    }, [acc]);

    const theme = useContext(ThemeContext);
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;
    return (
        <CCont>
            <CHeader src={srcsBg}>
                <TokenImage src={srcs} alt="token-image" />
                <Heading bold fontSize="24px">
                    {title}
                </Heading>
            </CHeader>
            <CBody>
                <Flex justifyContent="space-between">
                    <Flex flex="1" flexDirection="column" padding="10px">
                        <Flex alignItems="center" justifyContent="space-between" marginTop="-20px" marginBottom="10px" padding="10px 0px">
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
                            {status === STATE.active ? (
                                <StyledButton style={{ backgroundColor: '#32a31b' }}>LIVE NOW</StyledButton>
                            ) : status === STATE.upcoming ? (
                                <StyledButton style={{ backgroundColor: '#7a1ba3' }}>UPCOMING</StyledButton>
                            ) : (
                                <StyledButton style={{ backgroundColor: '#8e98a5' }}>COMPLETED</StyledButton>
                            )}
                        </Flex>
                        <Flex flexDirection="column" justifyContent="space-between">
                        <TextDescription color="textSubtle" as="p">
                            {longDesc}
                        </TextDescription>
                        <TextDescription color="textSubtle" as="p">
                            {longDesc2}
                        </TextDescription>
                        <TextDescription color="textSubtle" as="p">
                            {longDesc3}
                        </TextDescription>
                        </Flex>
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
                <FooterDetails pool={pool} project={project} />
            </CFooter>
        </CCont>
    );
};

export default ProjectComponent;
