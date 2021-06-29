import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '@sparkpointio/sparkswap-uikit';
import Page from 'components/layout/Page';
import CardNav from 'components/CardNav';
import Section, { CardGroup } from './styled';
import Card from './components/LaunchCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;
const SectionTitle = styled(Heading)`
    font-size: 24px;
`;

const LaunchpadHome: React.FC = () => {
    return (
        <Page>
            <Container>
                <CardNav />
                <Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardGroup>
                        <Card />
                        <Card />
                        <Card />
                    </CardGroup>
                </Section>
                <Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardGroup>
                        <Card />
                    </CardGroup>
                </Section>
                <Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardGroup>
                        <Card />
                    </CardGroup>
                </Section>
            </Container>
        </Page>
    );
};

export default LaunchpadHome;
