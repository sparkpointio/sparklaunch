import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { TokenAmount } from '@sparkpointio/sparkswap-sdk';
import { ThemeContext } from 'styled-components';
import { Globe, Send, Twitter } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { Button, CardBody, Flex, Heading, Progress, Text, useModal } from '@sparkpointio/sparkswap-uikit';
import {
    useAccountWhiteList,
    useFindProject as getFindProject,
    useFindProjectByAddress,
    useGetPoolsByAddress,
} from 'state/hooks';
import { IProjects, STATE } from 'config/constants/type';
import SvgIcon from 'components/SvgIcon';
import UnlockButton from 'components/ConnectWalletButton';
import PurchaseModal from 'components/Modals/PurchaseModal';
import { CustomThemeContext } from 'ThemeContext';
import { ProgressGroup, SocmedGroup } from '../components/styled';
import { ReactComponent as MediumIcon } from '../components/icons/MediumIcon.svg';
import Anchor from '../components/StyledLink';
import FooterDetails from './FooterDetails';
import {
    CBody,
    CCont,
    CFooter,
    CHeader,
    CustomDataGroup,
    SmalltokenImage,
    StyledButton,
    TextDescription,
    TokenImage,
} from './styled';
import { calculateLaunchpadStats, getAccountDetailsLaunchPad, getEndedStatus } from '../../../utils/contractHelpers';
import { useLaunchpadContract, useTokenContract } from '../../../hooks/useContracts';
import useActiveWeb3React from '../../../hooks/useActiveWeb3React';

type AppProps = {
    project: IProjects;
};
type ActionProps = AppProps & {
    account?: string | null;
    whiteListed?: boolean;
};

// Hook
export function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = React.useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

const Allocations: React.FC<{ tokenImage: string; symbol: string; allocation: string }> = ({
    tokenImage,
    symbol,
    allocation,
}) => {
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${tokenImage}`;
    return (
        <div style={{ marginTop: '20px' }}>
            {}
            <Text>My Allocations</Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SmalltokenImage src={srcs} alt='token-logo' />
                <Text bold>
                    {allocation} {symbol}
                </Text>
            </div>
        </div>
    );
};

const ActionCard: React.FC<ActionProps> = ({ account, whiteListed, project }) => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);
    const Paddress = getFindProject();

    const [stats, setStats] = useState({
        totalForSaleTokens: '-',
        totalSoldTokens: '-',
        remainingForSale: '-',
        totalSales: '-',
        expectedSales: '-',
        percentage: '00.00',
        tokenRate: '-',
        totalParticipants: '-',
    });
    const [accountDetails, setAccountDetails] = useState({
        balance: new TokenAmount(project.buyingCoin, BigInt(0)),
        amount: new TokenAmount(project.sellingCoin, BigInt(0)),
        maxPayableAmount: new TokenAmount(project.sellingCoin, BigInt(0)),
        maxExpendable: new TokenAmount(project.buyingCoin, BigInt(0)),
        rewardedAmount: new TokenAmount(project.sellingCoin, BigInt(0)),
        redeemed: false,
        whitelist: false,
    });

    const prevDeets = usePrevious(accountDetails);
    const [r2Category, setR2Category] = useState(project.category);

    const { library } = useActiveWeb3React();

    const contract = useLaunchpadContract(project.category);
    const isEnded = getEndedStatus(contract);
    const projCat = isEnded && project.category2 ? project.category2 : project.category;
    
    useEffect(() => {
        calculateLaunchpadStats(contract, project).then((r) => setStats(r));
        getAccountDetailsLaunchPad(contract, project, library, account)
            .then((r) => setAccountDetails(r))
            .catch(console.log);
        return () => console.log('')
    }, [contract, project, account, library]);



    useEffect(() => {
            if (accountDetails !== prevDeets) {
                getAccountDetailsLaunchPad(contract, project, library, account)
                .then((r) => setAccountDetails(r))
                .catch(console.log);
            }
    }, [ accountDetails, prevDeets, account, contract, library, project]);
    const [onPurchaseModal] = useModal(<PurchaseModal address={Paddress} stats={stats} category={projCat} />, false);
    // const tokenReport = {
    //     title: `${project.progress} ${project.symbol}`,
    // }


    useEffect(() => () => console.log(''), [])

    const percentage = parseFloat(stats.percentage).toFixed(4);
    const totalSoldTokens = parseFloat(stats.totalSoldTokens).toFixed(4);
    const totalSales = parseFloat(stats.totalSales).toFixed(4);
    const expectedSales = parseFloat(stats.expectedSales).toFixed(2);
    const { status } = project;
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
                <Text bold as='h1' fontSize='24px'>
                    {project.status === STATE.upcoming ? '-' : totalSoldTokens}{' '}
                    <span style={{ color: theme.colors.textSubtle }}>{project.symbol} Token Sold</span>
                </Text>
                <Progress primaryStep={parseFloat(project.status === STATE.upcoming ? '' : percentage)}
                          variant='flat' />
                <Flex justifyContent='space-between'>
                    <Text color='textSubtle'>{project.status === STATE.upcoming ? '-' : percentage}%</Text>
                    <Text color='textSubtle'>
                        {project.status === STATE.upcoming ? '-' : totalSales} / {project.status === STATE.upcoming ? '-' : expectedSales} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
            </ProgressGroup>
            <CustomDataGroup flexDirection='column'>
                <Flex justifyContent='space-between'>
                    <Text color='textSubtle'>{project.symbol} Price</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : stats.tokenRate} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Text color='textSubtle'>{project.symbol} Sold</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : stats.totalSoldTokens} {project.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Text color='textSubtle'>Total Raised</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : stats.totalSales} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Text color='primary'>Your Max Allocation</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : accountDetails.maxPayableAmount.toExact()} {project.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent='space-between'>
                    <Text color='primary'>Your Max BNB</Text>
                    {/* <Text>{accountDetails.maxExpendable.toExact()} BNB</Text> */}
                    {project.status === STATE.upcoming && !whiteListed ? <Text>0 BNB</Text> :
                        <Text>{accountDetails.maxExpendable.toExact()} BNB</Text>}
                </Flex>
            </CustomDataGroup>
            {!account && status===STATE.active ? (
                <div style={{ marginTop: '15px', padding: '10px 0px' }}>
                    <UnlockButton fullWidth />
                </div>
            ) : !whiteListed ? (
                <Allocations
                    tokenImage={project.image}
                    symbol={project.symbol}
                    allocation={(project.status === STATE.upcoming ? '0' : accountDetails.rewardedAmount.toExact())}
                />
            ) : (
                <>

                    {/* {!project.claimable ?
                <div>
                    {stats.remainingForSale === '-' ? <Button fullWidth disabled style={{marginTop: '10px', marginBottom: '10px'}}>Processing </Button> :
                    <Button onClick={onPurchaseModal} fullWidth style={{marginTop: '10px', marginBottom: '10px'}} >Purchase {project.symbol}</Button>
                    }

                <Text>Thank you for participating, allocations will be sent shortly through a Multisender App.</Text>
                </div> :
                <Button onClick={onPurchaseModal} fullWidth style={{marginTop: '10px'}} disabled={stats.remainingForSale === '-'}>Purchase {project.symbol}</Button>
                } */}

                    {status === STATE.active ? (
                        <>
                            <Allocations tokenImage={project.image} symbol={project.symbol}
                                         allocation={accountDetails.rewardedAmount.toExact()} />

                                <Button onClick={onPurchaseModal} fullWidth style={{ marginTop: '10px' }} disabled={stats.remainingForSale === '-'}>Purchase {project.symbol}</Button>
                                </>
                            ) : status === STATE.upcoming && (
                                <Allocations tokenImage={project.image} symbol={project.symbol} allocation={accountDetails.rewardedAmount.toExact()} />
                            )}
                {/* <Button onClick={onPurchaseModal} fullWidth style={{marginTop: '10px'}} disabled={stats.remainingForSale === '-'}>Purchase {project.symbol}</Button> */}
                </>
            )}
        </CardBody>
    )
};

const ProjectComponent: React.FC = () => {
    const { account } = useWeb3React();
    const [whiteListed, setWhiteList] = useState(false);
    const Paddress = getFindProject();
    const project = useFindProjectByAddress(Paddress);
    const history = useHistory();

    useEffect(() => {
        if (!Paddress) {
            history.push('/projects')
        }
    }, [history, Paddress])
    const acc = useAccountWhiteList(account, project.address);
    const pool = useGetPoolsByAddress(Paddress);
    const { title, image, longDesc, longDesc2, longDesc3, buyingCoin, socMeds, wallpaperBg, status } = project;
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;

    const [projectTokenInfo, setProjectTokenInfo] = useState({
        totalSupply: '0',
    });
    const tokenContract = useTokenContract(project.sellingCoin.address);


    // useEffect(() => {
    //     if (loading) {
    //         setLoading(false);
    //     }
    // }, [loading])

    // useEffect(() => {
    //     if (status === STATE.upcoming) {
    //         history.push('/projects');
    //     }
    // }, [history, status]);

    useEffect(() => {
        // tokenContract.balanceOf(account).then(console.log)
        tokenContract.totalSupply().then(r => {
            setProjectTokenInfo({ totalSupply: (new TokenAmount(project.sellingCoin, r)).toExact({ groupSeparator : ','}).toString() });
        }).catch(console.log);

        if (acc) {
            setWhiteList(true);
        } else setWhiteList(false);
    }, [acc, tokenContract, project.sellingCoin]);

    useEffect(() => {
        return () => console.log('Cleanup')
    }, [])
    const theme = useContext(ThemeContext);
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/${wallpaperBg}`;
    return (
        <CCont>
            <CHeader src={srcsBg}>
                <TokenImage src={srcs} alt='token-image' />
                <Heading bold fontSize='24px'>
                    {title}
                </Heading>
            </CHeader>
            <CBody>
                <Flex justifyContent='space-between'>
                    <Flex flex='1' flexDirection='column' padding='10px'>
                        <Flex
                            alignItems='center'
                            justifyContent='space-between'
                            marginTop='-20px'
                            marginBottom='10px'
                            padding='10px 0px'
                        >
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
                        <Flex flexDirection='column' justifyContent='space-between'>
                            <TextDescription color='textSubtle' as='p'>
                                {longDesc}
                            </TextDescription>
                            <TextDescription color='textSubtle' as='p'>
                                {longDesc2}
                            </TextDescription>
                            <TextDescription color='textSubtle' as='p'>
                                {longDesc3}
                            </TextDescription>
                        </Flex>
                    </Flex>
                    <Flex flex='1'>
                        <ActionCard
                            account={account}
                            whiteListed={whiteListed}
                            project={project}
                        />

                    </Flex>
                </Flex>
            </CBody>
            <CFooter>
                <FooterDetails pool={pool} project={project} projectTokenInfo={projectTokenInfo} />
            </CFooter>
        </CCont>
    );
};

export default ProjectComponent;
