import React from 'react';
import styled from 'styled-components'
import { Card, Text } from '@sparkpointio/sparkswap-uikit';
import { StyledCardHeader, StyledImage, StyledHeading, StyledCardBody, Options, StyledButton } from '../../Launchpad/components/styled';

interface CardProps {
    title: string;
    address: string;
    stakeToken: string;
    rewardToken: string;
    apy: string;
    status: string
}

const PoolCard: React.FC<{pool: CardProps}> = ({pool}) => {
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
            </StyledCardBody>
        </Card>
    )
}

export default PoolCard;