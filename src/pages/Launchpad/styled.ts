import styled from 'styled-components';
import { Heading, Flex} from '@sparkpointio/sparkswap-uikit';
import Column from 'components/Column'

const Section = styled.div`
    margin: 35px;
    width: 100%;
`

export const CardGroup = styled(Column)`
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    row-gap: 35px;
    column-gap: 35px;
    margin-top: 20px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 2fr);
      }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
      
`

export const Container = styled(Flex)`
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;
export const SectionTitle = styled(Heading)`
    font-size: 24px;
`;

export default Section;