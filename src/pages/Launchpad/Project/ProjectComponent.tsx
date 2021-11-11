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
import { calculateLaunchpadStats, checkEnded, getAccountDetailsLaunchPad } from '../../../utils/contractHelpers';
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
                <SmalltokenImage src={srcs} alt="token-logo" />
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

    const [poolEnded, setPoolEnded] = useState(false);
    const { library } = useActiveWeb3React();

    const contract = useLaunchpadContract(project.category);
    const cat2 = project.category2 ?? project.category;
    const contract2 = useLaunchpadContract(cat2);
    const _cat2 = contract2 ?? contract;

    const prevAccountDetails = usePrevious(accountDetails);

    useEffect(() => {
        if (accountDetails !== prevAccountDetails) {
            getAccountDetailsLaunchPad(_cat2, project, library, account)
            .then((r) => setAccountDetails(r))
            .catch(console.log);

        checkEnded(contract, contract2)
            .then((ended) => {
                if (ended.round1 && !project.category2) {
                    setPoolEnded(true);
                }
                if (ended.round2 && project.category2) {
                    setPoolEnded(true);
                }
                if (!ended.round1) {
                    calculateLaunchpadStats(contract, project).then((r) => setStats(r));
                }
                if (ended.round1 && project.category2 && !ended.round2) {
                    calculateLaunchpadStats(contract2, project).then((r) => setStats(r));
                }
                if (ended.round1 && project.category2 && ended.round2) {
                    calculateLaunchpadStats(contract, project, contract2).then((r) => setStats(r));
                }
            })
            .catch((e) => console.log(e));
        }
    }, [account, library, contract, contract2, project, _cat2, accountDetails, prevAccountDetails]);

    const [onPurchaseModal] = useModal(<PurchaseModal address={Paddress} stats={stats} category={cat2} />, false);
    // const tokenReport = {
    //     title: `${project.progress} ${project.symbol}`,
    // }

    useEffect(() => () => console.log(''), []);

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
                <Text bold as="h1" fontSize="24px">
                    {project.status === STATE.upcoming ? '-' : totalSoldTokens}{' '}
                    <span style={{ color: theme.colors.textSubtle }}>{project.symbol} Token Sold</span>
                </Text>
                <Progress
                    primaryStep={parseFloat(project.status === STATE.upcoming ? '' : percentage)}
                    variant="flat"
                />
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">{project.status === STATE.upcoming ? '-' : percentage}%</Text>
                    <Text color="textSubtle">
                        {project.status === STATE.upcoming ? '-' : totalSales} /{' '}
                        {project.status === STATE.upcoming ? '-' : expectedSales} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
            </ProgressGroup>
            <CustomDataGroup flexDirection="column">
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">{project.symbol} Price</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : stats.tokenRate} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">{project.symbol} Sold</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : stats.totalSoldTokens} {project.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="textSubtle">Total Raised</Text>
                    <Text>
                        {project.status === STATE.upcoming ? '-' : stats.totalSales} {project.buyingCoin.symbol}
                    </Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="primary">Your Max Allocation</Text>
                    <Text>
                        {project.status === STATE.upcoming || project.status === STATE.completed
                            ? `- ${project.symbol}`
                            : project.category !== project.category2 || !project.category2
                            ? `${accountDetails.maxPayableAmount.toExact()} ${project.symbol}`
                            : 'No limit'}
                    </Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="primary">Your Max BNB</Text>
                    {/* <Text>{accountDetails.maxExpendable.toExact()} BNB</Text> */}
                    {project.status === STATE.upcoming && !whiteListed ? (
                        <Text>0 BNB</Text>
                    ) : project.status === STATE.completed ? (
                        <Text>- BNB</Text>
                    ) : (
                        <Text>
                            {project.category !== project.category2 || !project.category2
                                ? `${accountDetails.maxExpendable.toExact()} BNB`
                                : 'No Limit'}{' '}
                        </Text>
                    )}
                </Flex>
            </CustomDataGroup>
            {!account && status === STATE.active ? (
                <div style={{ marginTop: '15px', padding: '10px 0px' }}>
                    <UnlockButton fullWidth />
                </div>
            ) : !whiteListed ? (
                <Allocations
                    tokenImage={project.image}
                    symbol={project.symbol}
                    allocation={project.status === STATE.upcoming ? '0' : accountDetails.rewardedAmount.toExact()}
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
                            <Allocations
                                tokenImage={project.image}
                                symbol={project.symbol}
                                allocation={accountDetails.rewardedAmount.toExact()}
                            />

                            {stats.remainingForSale && !poolEnded && (
                                <Button
                                    onClick={onPurchaseModal}
                                    fullWidth
                                    style={{ marginTop: '10px', marginBottom: '10px' }}
                                >
                                    Purchase {project.symbol}
                                </Button>
                            )}

                            {!stats.remainingForSale && (
                                <Button disabled fullWidth style={{ marginTop: '10px', marginBottom: '10px' }}>
                                    SOLD OUT
                                </Button>
                            )}

                            {stats.remainingForSale && poolEnded && (
                                <Button disabled fullWidth style={{ marginTop: '10px', marginBottom: '10px' }}>
                                    ENDED
                                </Button>
                            )}
                        </>
                    ) : (
                        status === STATE.upcoming && (
                            <Allocations
                                tokenImage={project.image}
                                symbol={project.symbol}
                                allocation={accountDetails.rewardedAmount.toExact()}
                            />
                        )
                    )}
                    {/* <Button onClick={onPurchaseModal} fullWidth style={{marginTop: '10px'}} disabled={stats.remainingForSale === '-'}>Purchase {project.symbol}</Button> */}
                </>
            )}
        </CardBody>
    );
};

const ProjectComponent: React.FC = () => {
    const { account } = useWeb3React();
    const [whiteListed, setWhiteList] = useState(false);
    const Paddress = getFindProject();
    const project = useFindProjectByAddress(Paddress);
    const history = useHistory();

    useEffect(() => {
        if (!Paddress) {
            history.push('/projects');
        }
    }, [history, Paddress]);
    const acc = useAccountWhiteList(account, project.address);
    const pool = useGetPoolsByAddress(Paddress);
    const { title, image, longDesc, longDesc2, longDesc3, buyingCoin, socMeds, wallpaperBg, status, category2 } =
        project;
    const srcs = `${process.env.PUBLIC_URL}/images/icons/${image}`;

    const [projectTokenInfo, setProjectTokenInfo] = useState({
        totalSupply: '0',
    });
    const tokenContract = useTokenContract(project.sellingCoin.address);

    useEffect(() => {
        // tokenContract.balanceOf(account).then(console.log)
        tokenContract
            .totalSupply()
            .then((r) => {
                setProjectTokenInfo({
                    totalSupply: new TokenAmount(project.sellingCoin, r).toExact({ groupSeparator: ',' }).toString(),
                });
            })
            .catch(console.log);

        if (acc) {
            setWhiteList(true);
        } else setWhiteList(false);
    }, [acc, tokenContract, project.sellingCoin]);

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
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            marginTop="-20px"
                            marginBottom="10px"
                            padding="10px 0px"
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
                                <StyledButton style={{ backgroundColor: '#32a31b' }}>
                                    {' '}
                                    {category2 ? 'R2' : 'R1'} LIVE NOW
                                </StyledButton>
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
                        <ActionCard account={account} whiteListed={whiteListed} project={project} />
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
