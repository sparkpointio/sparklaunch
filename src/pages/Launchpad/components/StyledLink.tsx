import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Anchor = ({href, children}: {href?: string; children: React.ReactNode}) => {
    return (
        <div style={{margin: '5px'}}>
            <a href={`https://www.${href}`}>{children}</a>
        </div>
    )
}

export const StyledLink = styled(Link)`
    background-color: #32a31b;
    width: 100%;
    padding: 15px 0px;
`

export default Anchor;