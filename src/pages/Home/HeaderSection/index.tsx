import React from 'react';
import { Text, Button, Heading } from '@sparkpointio/sparkswap-uikit';
import useMedia from 'use-media';
import Divider from 'components/Divider';
import { StyledContainer, StyledHeader, StyledDiv, ActionsDiv, EnterButton, ApplyButton } from './styled'; 

const Section: React.FC = () => {
    const isMobile = useMedia({maxWidth: 500})
    return (
        <StyledContainer>
            <StyledHeader>
                <Heading as="h1" size={isMobile? "xl":"xxl"} bold>
                    Make your token live at SparkLaunch
                </Heading>
            </StyledHeader>
            <Divider />
            <StyledDiv style={{justifyContent: 'center', textAlign: 'center'}}>
                <Text fontSize={isMobile?"17px":"21px"} color="textSubtle">
                    A token launch platform for transformative crypto currency projects to distrubute tokens and
                    increase liquidity
                </Text>
            </StyledDiv>
            <ActionsDiv>
                <Button as="a" href="https://sparkswap.finance/#/swap" fullWidth>
                    Buy on SparkSwap
                </Button>
                <EnterButton fullWidth>Enter SparkLaunch</EnterButton>
                <ApplyButton fullWidth>Apply for IDO</ApplyButton>
            </ActionsDiv>
        </StyledContainer>
    );
};

export default Section;
