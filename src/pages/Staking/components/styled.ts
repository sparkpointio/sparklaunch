import styled from 'styled-components';
import { Flex, Button, Dropdown } from '@sparkpointio/sparkswap-uikit';


export const StyledActionsGroup = styled(Flex)`
    & > * {
        margin: 5px 0px;
    }

    &:before {
        content: '';
        border-top: 3px solid ${({ theme }) => theme.colors.primary};
        padding-top: 10px;
        margin-bottom: 10px;
    }
    &:after {
        content: '';
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
        padding-bottom: 10px;
        margin-top: 10px;
    }
`

export const MoreAction = styled(Flex)`
    margin: 5px 0px;
`

export const ActionButton = styled(Button)`
    height: 40px;
    width: 120px;
`
