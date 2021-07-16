import React, { useState, useContext} from 'react';
import styled, { ThemeContext } from 'styled-components'
import { useWeb3React } from '@web3-react/core';
import { ChevronDown, ChevronUp, ExternalLink } from 'react-feather'
import { Card, Text, Flex, Button, useModal, Dropdown } from '@sparkpointio/sparkswap-uikit';
import UnlockButton from 'components/ConnectWalletButton';
import StakingModal from 'components/Modals/StakingModal';
import WithdrawModal from 'components/Modals/WithdrawModal';
import ExitStakingModal from 'components/Modals/ExitStakingModal';
import { StatusColor } from 'pages/styled';
import { StyledCardHeader, StyledImage, StyledHeading, StyledCardBody, Options, StyledButton } from '../../Launchpad/components/styled';
import { ActionButton, MoreAction, StyledActionsGroup } from './styled';


interface CardProps {
    title: string;
    address: string;
    stakeToken: string;
    rewardToken: string;
    apy: string;
    status: string
}

const RenderConnected: React.FC<{pool: CardProps}> = ({pool}) => {
    const [ enable, setEnable ] = useState<boolean>(false);
    const [ showClaim, setShowClaim ] = useState<boolean>(false);
    const [ onStakingModal ]= useModal(<StakingModal />)
    const [ onWithdraw ] = useModal(<WithdrawModal />)
    const [ onExit ] = useModal(<ExitStakingModal />)
    return (
        <>
        <Flex justifyContent="space-between" alignItems="center">
            <Flex flexDirection="column">
                <Text>{pool.rewardToken} Earned</Text>
                <Text fontSize="24px">110.407</Text>
                <Text color="textSubtle">~ 18.49 USD</Text>
            </Flex>
            <div onMouseEnter={()=> setShowClaim(true)} onMouseLeave={()=> setShowClaim(false)}>
            <Dropdown target={<ActionButton variant="secondary" >Claim {!showClaim? <ChevronDown /> : <ChevronUp /> }</ActionButton>}>
                <ActionButton variant="primary" fullWidth onClick={onWithdraw}>Claim </ActionButton>
                <ActionButton variant="primary" fullWidth onClick={onExit}>Claim & Withdraw </ActionButton>
            </Dropdown>
            </div>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
           { enable && <Flex flexDirection="column">
                <Text>{pool.stakeToken} Staked</Text>
                <Text fontSize="24px">10,121.552.407</Text>
                <Text color="textSubtle">~ 1,695.20 USD</Text>
            </Flex>}
           { !enable? ( <Button onClick={() => setEnable(true)} fullWidth>Enable</Button>) : (<ActionButton variant="secondary" onClick={onStakingModal}>Stake</ActionButton>)}
        </Flex>
        </>
    )
}

const RenderNotConnected = () => {
    return ( 
        <>
            <Text marginBottom="10px">Start Earning</Text>
            <UnlockButton fullWidth />
        </>
    )
}

const PoolCard: React.FC<{pool: CardProps}> = ({pool}) => {
    const theme = useContext(ThemeContext)
    const [ show, setShow ] = useState<boolean>(false)
    const { account } = useWeb3React();
    const { title, address, stakeToken, rewardToken, apy, status } = pool
    const src = `${process.env.PUBLIC_URL}/images/pools/${address}.png`
    const bgSrc = `${process.env.PUBLIC_URL}/images/pools/${address}BG.jpg`
    const description = `Stake ${stakeToken} earm ${rewardToken}`
    

    return (
        <div>
        <Card>
            <StyledCardHeader src={bgSrc}>
                <StyledImage src={src} alt="pool-logo" />
                <StyledHeading bold>{ title }</StyledHeading>
            </StyledCardHeader>
            <StyledCardBody>
                <Options>
                    <Text>{description}</Text>
                    {
                        status === 'live' ? (
                            <StyledButton style={{ backgroundColor: StatusColor.live }}>LIVE NOW</StyledButton>
                        ): status === 'upcoming' ? (
                            <StyledButton style={{ backgroundColor: StatusColor.upcoming }}>UPCOMING</StyledButton>
                        ) : status === 'completed' && ( <StyledButton style={{ backgroundColor: StatusColor.completed }}>COMPLETED</StyledButton>)
                    }
                    
                </Options>
                <StyledActionsGroup flexDirection="column">
                    <Flex justifyContent="space-between">
                        <Text color="textSubtle">APY</Text>
                        <Text>{apy}</Text>
                    </Flex>
                    { !account ? RenderNotConnected() : <RenderConnected pool={pool} /> }
                </StyledActionsGroup>
                <MoreAction justifyContent="flex-end">
                    <Text style={{color: theme.colors.text, display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => setShow(!show)} >
                        {
                            show && account ? (
                                <>
                                Hide <ChevronUp />
                                </>
                            ):(
                                <>
                                Details <ChevronDown />
                                </>
                            )
                        }
                    </Text>
                </MoreAction>
            </StyledCardBody>
        </Card>
        { show && account && (
                <Flex justifyContent="space-between" style={{background: theme.colors.card, padding: '0px 15px 15px '}}>
                    <Text bold>Total Staked</Text>
                    <Flex flexDirection="column" alignItems="flex-end">
                        <Text>0 {stakeToken}</Text>
                        <Text>View contract <ExternalLink /></Text>
                        <Text>Add to Metamask <ExternalLink /></Text>
                    </Flex>
                </Flex>
                )}
        </div>
    )
}

export default PoolCard;