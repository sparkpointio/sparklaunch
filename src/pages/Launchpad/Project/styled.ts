import styled from 'styled-components'
import { Card, CardHeader, CardBody, Button, Flex, Text} from '@sparkpointio/sparkswap-uikit';
import { SocmedGroup, ProgressGroup, DataGroup } from '../components/styled';

export const CCont = styled(Card)`
    width: 100%;
`;
export const CHeader = styled(CardHeader)`
    display: flex;
    align-items: center;
    height: auto;
    min-height: 10vh;
    max-height: 15vh;
`;
export const TokenImage = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 10px 15px;
`;

export const SmalltokenImage = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 10px 15px;
`;

export const CBody = styled(CardBody)`
    padding: 20px;
`;

export const StyledButton = styled(Button)`
    cursor: context-menu;
    height: 35px;
    border-radius: 5px;
`;

export const CustomDataGroup = styled(DataGroup)`
    &:before {
        content: '';
        border-top: 5px solid ${({ theme }) => theme.colors.primary};
        padding-top: 10px;
        margin-bottom: 10px;
    }
    &:after {
        content: '';
        border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
        padding-bottom: 10px;
        margin-top: 10px;
    }
`;

export const CFooter = styled(Flex)`
    width: 100%;
    min-height: 20vh;
    height: auto;
    padding: 25px;
`;


const TableDiv = styled(Flex)`
    width: 100%;
    max-width: 720px;
`

export const TBHeader = styled(TableDiv)``;
export const TBBody = styled(TableDiv)`
    margin-top: 10px;
`;

export const TextDescription = styled(Text)`
    margin: 10px 5px
`