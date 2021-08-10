import styled from 'styled-components'

const StyledHr = styled.hr`
    height: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    width: 40%;
    margin: 15px;
    @media (max-width: 1366px){
        margin-top: 4vh;
        margin-bottom: 4vh;
      }
      @media (max-width: 500px){
        margin-top: 4vh;
        margin-bottom: 10vh;
      }
`

export const StyledHr2 = styled.hr`
    height: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    width: 100%;
  
`

export default StyledHr;