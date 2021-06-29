import React from 'react'
import styled from 'styled-components';
import { Heading, Text } from '@sparkpointio/sparkswap-uikit'
import Page from 'components/layout/Page'
import Section, {CardGroup} from './styled'
import Card from './components/LaunchCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const SectionTitle = styled(Heading)`
    font-size: 24px;
`

const LaunchpadHome: React.FC = () => {
    return (
        <Page>
            <Container>
                <Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardGroup>
                        <Card />
                        <Card />
                        <Card />
                    </CardGroup>
                </Section>
                <Section>
                    <SectionTitle>Upcoming Launches</SectionTitle>
                </Section>
                <Section>
                    <SectionTitle>Completed Launches</SectionTitle>
                </Section>
            </Container>
        </Page>
    );
};


export default LaunchpadHome;