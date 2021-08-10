import styled from 'styled-components'
import { Button, CardHeader } from '@sparkpointio/sparkswap-uikit';
import { Link } from 'react-router-dom';
import Container from '../styled';


export const StyledContainer = styled(Container)`
    height: auto;
    min-height: 65vh;
    display: run-in; 
    // background: rgb(2, 0, 36);
    background: ${({theme}) => theme.isDark && "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(5,23,54,1) 50%, rgba(0,0,0,1) 100%)"}; 
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 1920px) {
        padding-bottom: 16vh;
    padding-top: 18vh;
    }
    @media (max-width: 1366px) {
        padding-bottom: 16vh;
    padding-top: 16vh;
     
    justify-content: space-around;
    }
    @media (max-width: 414px) {
        padding: 39px;
    }
    @media (max-width: 375px) {
        padding: 12px;
    }    
`;

export const AnimContainer = styled(Container)`
    margin-top: -5vh;
    margin-bottom: -5vh;
    width: 70vh;
    height: 70vh;
    @media (max-width: 500px) {
        width: 40vh;
        height: 40vh;
        margin-top: 1vh;
        margin-bottom: 5vh;
    }    
`;

export const StyledHeader = styled.div`
    margin-top: 10px;
    width: 100%;
    max-width: 1200px;
    text-align: center;
    word-spacing: 5px;
`;

export const HeroHeader = styled(CardHeader)<{ src?: string }>`
    display: flex;
    padding: 0px;
    align-items: center;
    position: relative;
    ${({ src }) => src && `
        &:before {
            content: ' ';
            display: block;
            position: absolute;
            opacity: 0.2;
            width: 85%;
            height: 85%;
            z-index: 1;
            background-image: url(${src});
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-position: left;
            background-size: left;
        }
    `}  
`;


export const StyledDiv = styled.div`
    max-width: 1920px;
    width: 100%;
    display: flex;
    align-item: center;
    width: 90%;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 24px;
        width: 90%;
    }
    
`;
export const ActionsDiv = styled(StyledDiv)`
    z-index: 2;
    margin-bottom: 15px;
    > * {
        margin: 10px;
    }
`;

export const SetUnderline = styled.span`
    border-bottom-style: solid;
    padding-bottom: 20px;
    border-bottom-width: 5px;
    border-color: ${({ theme }) => theme.colors.primary};
`;
export const EnterButton = styled(Button)`
    background-color: #32a31b;
`;


export const StyledLink = styled(Link)`
    background-color: #32a31b;
    width: 100%;
    display: flex;
    color: ${({theme}) => theme.colors.text};
    align-items: center;
    justify-content: center;
    font-weight: bold;
    z-index: 2;
    
    @media (max-width: 770px ) {
        height: 5.6vh;
    }
    @media (max-width: 746px ) {
        height: 6vh;
    }
    @media (max-width: 560px ) {
        height: 6.1vh;
    }
    @media (max-width: 414px ) {
        height: 6.7vh;
    }
    @media (max-width: 375px) {
        height: 7.2vh;
    }
    @media (max-width: 320px ) {
        height: 7.8vh;
    }
    
`