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