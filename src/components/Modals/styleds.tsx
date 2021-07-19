import { Flex } from '@sparkpointio/sparkswap-uikit';
import styled, { css } from 'styled-components';

export const ArrowWrapper = styled.div<{ clickable: boolean }>`
  padding: 2px;
  ${({ clickable }) =>
    clickable
      ? css`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `
      : null}
`

export const ModalBody = styled(Flex)`
 width: 420px;
 margin-top: -30px;
 & > * {
   margin: 10px 0px;
 }
`

export const ModalDescription = styled(Flex)`
 & > * {
   margin: 5px 0px;
 }
`
export const ModalAction = styled(Flex)`
 margin: 10px 0px;
 min-width: 250px;

 & > * {
   color: ${({theme}) => theme.colors.text};
   margin-top: 15px;
   margin-bottom: 10px
 }
`

export const StakingInput = styled.div`
 display: flex;
 flex-direction: column;
 border: 1px solid ${({theme}) => theme.colors.primary};
 width: 100%;
 margin: 15px 0px 3px 0px;
 padding: 25px;
 min-height: 100px;
 background: ${({theme}) => theme.isDark? `#1c304a` :theme.colors.card}
`