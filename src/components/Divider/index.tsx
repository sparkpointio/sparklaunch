import styled from 'styled-components'

const StyledHr = styled.hr`
    height: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    width: 40%;
    margin: 15px;
`

export default StyledHr;