import styled from 'styled-components'
import { Button } from '@sparkpointio/sparkswap-uikit';
import { Link } from 'react-router-dom';
import Container from '../styled';


export const StyledContainer = styled(Container)`
    height: auto;
    min-height: 65vh;
    padding: 20px;
    line-height: 3px;
    // background: rgb(2, 0, 36);
    background: ${({theme}) => theme.isDark && "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(5,23,54,1) 50%, rgba(0,0,0,1) 100%)"}; 
    width: 100%;
    justify-content: space-evenly;

    @media (min-width: 2560px ) {
        min-height: 40vh;
    }
`;

export const StyledHeader = styled.div`
    margin-top: 10px;
    width: 100%;
    max-width: 1200px;
    text-align: center;
    word-spacing: 5px;
`;

export const StyledDiv = styled.div`
    max-width: 768px;
    width: 100%;
    display: flex;
    margin: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 24px;
        width: 90%;
    }
    @media (max-width: 414px) {
        margin: 37px;
    }
    @media (max-width: 375px) {
        margin: 21px;
    }
    @media (max-width: 320px) {
        margin: 45px;
    }
`;
export const ActionsDiv = styled(StyledDiv)`
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
    
    @media (max-width: 770px ) {
        width: 100%;
        height: 6.8vh;
    }
    @media (max-width: 375px) {
        width: 100%;
        height: 7.6vh;
    }
    @media (max-width: 320px ) {
        width: 100%;
        height: 8.6vh;
    }
    
`