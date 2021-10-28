import React from 'react';
import { Text, Button, Heading } from '@sparkpointio/sparkswap-uikit';
import useMedia from 'use-media';
import Divider from 'components/Divider';
import LottieAnimation from 'lottie';
import data from 'Animation/data.json';
import { TwoColumnHeader } from 'components/Column';
import { StyledContainer, StyledHeader, StyledDiv, ActionsDiv, StyledLink, AnimContainer } from './styled';

const Section: React.FC = () => {
    const isMobile = useMedia({maxWidth: 500})
    const isTablet = useMedia({maxWidth: 1000})
    const isDesktop = useMedia({maxWidth: 1920})
    const exclusive_binance = `${process.env.PUBLIC_URL}/images/icons/exclusive_binance.png`;
    const srcsBg = `${process.env.PUBLIC_URL}/images/icons/sparklaunch.svg`;

    return (
        <>
        <TwoColumnHeader>
            <StyledContainer>
            <StyledHeader>            
                <Heading style={isMobile? { marginBottom: '3vh', marginTop: '-3vh' } : { marginTop: '3vh', marginBottom: '-3vh' }} as="h1" size={isMobile? "xl":"xxl"} bold>
                     Ignite your token on SparkLaunch!
                </Heading>
            </StyledHeader>
            <Divider />
            <StyledDiv style={isDesktop? {justifyContent: 'center', textAlign: 'center', marginTop: '-3vh', marginBottom: '0vh'}:{justifyContent: 'center', textAlign: 'center', marginTop: '-5vh'}}>
                <Text fontSize={isMobile?"17px":"21px"} color="textSubtle">
                    A token launch platform for transformative cryptocurrency projects to distribute tokens and
                    increase liquidity
                </Text>
            </StyledDiv>
            <StyledDiv style={isDesktop? {justifyContent: 'center', textAlign: 'center', marginBottom: '10px'}:{justifyContent: 'center', textAlign: 'center', marginTop: '-5vh', marginBottom: '-5vh'}}>
                <Text>Exclusively on <img src={exclusive_binance} alt="ex-binance" width="20vw" height="20vh" style={{verticalAlign: 'middle'}} /> Binance Smart Chain</Text>
            </StyledDiv>            
            <ActionsDiv>
                <Button as="a" href="https://sparkswap.finance/#/swap" style={{width: '100%'}}>
                    Buy on SparkSwap
                </Button>
                <Button as="a" href="/#/projects" fullWidth style={{backgroundColor: '#32a31b'}}><h1 style={{ color: 'white' }}>Enter SparkLaunch</h1></Button> 
                <Button as="a" href="https://forms.gle/hXZPr93vC8TEmsoh8" fullWidth style={{backgroundColor: '#7a1ba3'}} >Apply for IDO</Button>
            </ActionsDiv>
        </StyledContainer>
       <StyledContainer style={isTablet? {gridRow: 1} : {}}>
           <AnimContainer>
                <LottieAnimation lotti={data} position='center'/>
            </AnimContainer>
        </StyledContainer>
        </TwoColumnHeader>
       
        </>
    );
};

export default Section;
