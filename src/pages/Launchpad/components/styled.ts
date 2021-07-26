import styled from 'styled-components';
import { CardHeader, CardBody, Flex, Button, Heading } from '@sparkpointio/sparkswap-uikit'

export const StyledCardHeader = styled(CardHeader)<{ src?: string }>`
    display: flex;
    padding: 20px;
    align-items: center;
    position: relative;
    ${({ src }) => src && `
        &:before {
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0.3;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-image: url(${src});
            background-repeat: no-repeat;
            // background-attachment: fixed;
            background-position: center;
            background-size: cover;
        }
    `}  
`;

export const StyledHeading = styled(Heading)`
    z-index: 2;
    font-size: 24px;
`

export const StyledCardBody = styled(CardBody)`
    flex-direction: column;
    text-align: left;
    padding: 15px;
`;

export const CardAction = styled(Flex)`
    padding: 25px 15px;
`;

export const Options = styled(Flex)`
    padding: 15px 0px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`;

export const SocmedGroup = styled(Flex)`
    flex: 0.5;
    justify-content: space-evenly;
`;

export const Details = styled(Flex)`
    flex-direction: column;
    min-height: 300px;
    justify-content: space-between;
`;
export const ProgressGroup = styled(Flex)`
    flex-direction: column;
    margin: 15px 0px;
`;

export const DataGroup = styled(Flex)`
    & > * {
        margin: 5px 0px;
    }
`;

export const StyledButton = styled(Button)`
    cursor: context-menu;
    height: 35px;
    border-radius: 5px;
`;

export const TimerButton = styled(Button)`
    cursor: context-menu;
    height: 35px;
    border-radius: 5px;
    background-color: green;
    display: inline-flex;
    width: 100%;
    height: 7vh;
    text-align:center;
    overflow: hidden;
    @media (max-width: 382px) {
        text-align:center;
        font-size: 94%;
        height: 6vh;
      }
`;

export const StyledImage = styled.img<{size?: string}>`
    border-radius: 50%;
    height: ${({ size }) => !size? '60px': size};
    width: ${({ size }) => !size? '60px' : size};
    margin-right: 15px;
    z-index: 2;
`;

export const SmallstyledImage = styled.img<{size?: string}>`
    border-radius: 50%;
    height: ${({ size }) => !size? '30px': size};
    width: ${({ size }) => !size? '30px' : size};
    margin-right: 15px;
    z-index: 2;
`;
