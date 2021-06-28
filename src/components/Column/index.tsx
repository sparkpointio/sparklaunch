import styled from 'styled-components';

const Column = styled.div`
    display: grid;
`

export const AboutColumn = styled(Column)`
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
width: 100%;
max-width: 1200px;
height: auto;
text-align: center;
justify-content: center;
column-gap: 20px;
row-gap: 20px;
`

export default Column;