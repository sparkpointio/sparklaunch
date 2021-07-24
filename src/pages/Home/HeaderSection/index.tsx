import React from 'react';
import { Text, Button, Heading } from '@sparkpointio/sparkswap-uikit';
import useMedia from 'use-media';
import Divider from 'components/Divider';
import { StyledContainer, StyledHeader, StyledDiv, ActionsDiv, StyledLink } from './styled';

const Section: React.FC = () => {
    const isMobile = useMedia({maxWidth: 500})
    const exclusive_binance = `${process.env.PUBLIC_URL}/images/icons/exclusive_binance.PNG`;
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
                    A token launch platform for transformative cryptocurrency projects to distribute tokens and
                    increase liquidity
                </Text>
            </StyledDiv>
            <StyledDiv style={{justifyContent: 'center', textAlign: 'center'}}>
                <h5>Exclusively on <img src={exclusive_binance} alt="ex-binance" width="20vw" height="20vh" style={{verticalAlign: 'middle'}} /> Binance Smart Chain</h5>
            </StyledDiv>
            
            
            <ActionsDiv>
                <Button as="a" href="https://sparkswap.finance/#/swap" style={{width: '100%'}}>
                    Buy on SparkSwap
                </Button>
                <StyledLink to="/projects" ><h1 style={{ color: 'white' }}>Enter SparkLaunch</h1></StyledLink>
                <Button as="a" href="https://forms.gle/hXZPr93vC8TEmsoh8" fullWidth style={{backgroundColor: '#7a1ba3'}} >Apply for IDO</Button>
            </ActionsDiv>

        </StyledContainer>
    );
};

export default Section;
