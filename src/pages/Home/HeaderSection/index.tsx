import React from 'react';
import { Text, Button, Heading } from '@sparkpointio/sparkswap-uikit';
import useMedia from 'use-media';
import styled from 'styled-components';
import Container, { StyledHr } from '../styled';

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 60vh;
    padding: 10px;
    line-height: 3px;
    background: rgb(2, 0, 36);
    background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(5, 24, 56, 1) 55%, rgba(2, 0, 36, 1) 100%);
    width: 100%;
    justify-content: space-evenly;

    @media (min-width: 2560px ) {
        min-height: 40vh;
    }
`;

const StyledHeader = styled.div`
    margin-top: 10px;
    width: 100%;
    max-width: 1200px;
    text-align: center;
    word-spacing: 5px;
`;

const StyledDiv = styled.div`
    max-width: 768px;
    width: 100%;
    display: flex;
    margin: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const ActionsDiv = styled(StyledDiv)`
    > * {
        margin: 10px;
    }
`;

const SetUnderline = styled.span`
    border-bottom-style: solid;
    padding-bottom: 20px;
    border-bottom-width: 5px;
    border-color: ${({ theme }) => theme.colors.primary};
`;
const EnterButton = styled(Button)`
    background-color: #32a31b;
`;
const ApplyButton = styled(Button)`
    background-color: #7a1ba3;
`;

const HeaderSection: React.FC = () => {
    const isMobile = useMedia({maxWidth: 500})
    return (
        <StyledContainer>
            <StyledHeader>
                <Heading as="h1" size={isMobile? "xl":"xxl"} bold>
                    Make your token live at SparkLaunch
                </Heading>
            </StyledHeader>
            <StyledHr />
            <StyledDiv style={{justifyContent: 'center', textAlign: 'center'}}>
                <Text fontSize={isMobile?"17px":"21px"}>
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

export default HeaderSection;
