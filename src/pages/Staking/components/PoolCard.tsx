import React, { useState, useContext} from 'react';
import styled, { ThemeContext } from 'styled-components'
import { useWeb3React } from '@web3-react/core';
import { ChevronDown } from 'react-feather'
import { Card, Text, Flex, Button } from '@sparkpointio/sparkswap-uikit';
import UnlockButton from 'components/ConnectWalletButton';
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
    return (
        <>
        <Flex justifyContent="space-between" alignItems="center">
            <Flex flexDirection="column">
                <Text>{pool.rewardToken} Earned</Text>
                <Text fontSize="24px">110.407</Text>
                <Text color="textSubtle">~ 18.49 USD</Text>
            </Flex>
            <ActionButton variant="secondary">Claim <ChevronDown/> </ActionButton>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
            <Flex flexDirection="column">
                <Text>{pool.stakeToken} Staked</Text>
                <Text fontSize="24px">10,121.552.407</Text>
                <Text color="textSubtle">~ 1,695.20 USD</Text>
            </Flex>
            <ActionButton variant="secondary">Stake</ActionButton>
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
        <Card>
            <StyledCardHeader src={bgSrc}>
                <StyledImage src={src} alt="pool-logo" />
                <StyledHeading bold>{ title }</StyledHeading>
            </StyledCardHeader>
            <StyledCardBody>
                <Options>
                    <Text>{description}</Text>
                    <StyledButton style={{ backgroundColor: '#32a31b' }}>LIVE NOW</StyledButton>
                </Options>
                <StyledActionsGroup flexDirection="column">
                    <Flex justifyContent="space-between">
                        <Text color="textSubtle">APY</Text>
                        <Text>{apy}</Text>
                    </Flex>
                    { !account ? RenderNotConnected() : <RenderConnected pool={pool} /> }
                </StyledActionsGroup>
                <MoreAction justifyContent="flex-end">
                    <ActionButton style={{color: theme.colors.text}} onClick={() => setShow(!show)} variant="text">Details <ChevronDown/> </ActionButton>
                </MoreAction>
               { show && (
                <div>
                    h1
                </div>
                )}
            </StyledCardBody>
        </Card>
    )
}

export default PoolCard;