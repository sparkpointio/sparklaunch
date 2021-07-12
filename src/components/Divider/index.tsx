import styled from 'styled-components'

const StyledHr = styled.hr`
    height: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    width: 40%;
    margin: 15px;
`

export const StyledHr2 = styled.hr`
    height: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    width: 100%;
  
`

export default StyledHr;