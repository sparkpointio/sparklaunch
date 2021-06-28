import React from 'react'
import { Button } from '@sparkpointio/sparkswap-uikit';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledHr = styled.hr`
    height: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    width: 40%;
    margin: 20px;
`

export default Container;