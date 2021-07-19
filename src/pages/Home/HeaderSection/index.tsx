import React from 'react';
import { Text, Button, Heading } from '@sparkpointio/sparkswap-uikit';

import useMedia from 'use-media';
import Divider from 'components/Divider';
import { StyledContainer, StyledHeader, StyledDiv, ActionsDiv, StyledLink } from './styled'; 


const Section: React.FC = () => {
    const isMobile = useMedia({maxWidth: 500})
    return (
        <StyledContainer>
            <StyledHeader>
                <Heading as="h1" size={isMobile? "xl":"xxl"} bold>
                Ignite your token on SparkLaunch!
                </Heading>
            </StyledHeader>
            <Divider />
            <StyledDiv style={{justifyContent: 'center', textAlign: 'center'}}>
                <Text fontSize={isMobile?"17px":"21px"} color="textSubtle">
                    A token launch platform for transformative crypto currency projects to distribute tokens and
                    increase liquidity
                </Text>
            </StyledDiv>
            <ActionsDiv>
                <Button as="a" href="https://sparkswap.finance/#/swap" style={{width: '100%'}}>
                    Buy on SparkSwap
                </Button>
                <StyledLink to="/launch/projects" >Enter SparkLaunch</StyledLink>
                <Button fullWidth style={{backgroundColor: '#7a1ba3'}} >Apply for IDO</Button>
            </ActionsDiv>
        
        </StyledContainer>
    );
};

export default Section;
