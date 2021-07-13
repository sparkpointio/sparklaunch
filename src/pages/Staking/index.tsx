import React from 'react'
import CardNav from 'components/CardNav';
import Page from 'components/layout/Page';
import { Container, SectionTitle, Section } from './styled'
import CardContainer from './components/CardsContainer';

const StakingComponent: React.FC = () => {
    return (
        <Page>
            <Container>
            <CardNav activeIndex={1} />
            <Section>
                <SectionTitle>Ongoing Pools</SectionTitle>
                <CardContainer />
            </Section>
            </Container>
        </Page>
    )
}

export default StakingComponent;