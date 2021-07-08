import styled from 'styled-components';
import { CardHeader, CardBody, Flex, Button } from '@sparkpointio/sparkswap-uikit'

export const StyledCardHeader = styled(CardHeader)`
    display: flex;
    padding: 20px;
    align-items: center;
`;
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

export const StyledImage = styled.img<{size?: string}>`
    border-radius: 50%;
    height: ${({ size }) => !size? '60px': size};
    width: ${({ size }) => !size? '60px' : size};
    margin-right: 15px;
`;
