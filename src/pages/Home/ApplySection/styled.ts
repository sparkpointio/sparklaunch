import styled from 'styled-components';
import { Heading, Button } from '@sparkpointio/sparkswap-uikit';
import Container from '../styled';

const StyledContainer = styled(Container)`
    padding: 20px;
    height: auto;
    min-height: 40vh;
    justify-content: space-around;
    align-items: center;
`

export default StyledContainer;

export const StyledHeading = styled(Heading)`
    padding: 20px;
    &:after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 80%;
        padding-top: 20px;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    }
`;
