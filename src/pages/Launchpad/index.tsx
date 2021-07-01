import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Heading, Text } from '@sparkpointio/sparkswap-uikit';
import ProjectList from 'config/dummy-data/Projects';
import Page from 'components/layout/Page';
import CardNav from 'components/CardNav';
import Section from './styled';
import CardContainer from './components/CardContainer';

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
    const ActiveProjects = ProjectList.filter(project => project.status === "active")
    const UpcomingProjects = ProjectList.filter(project => project.status === "upcoming")
    const CompletedProjects = ProjectList.filter(project => project.status === "completed")


    return (
        <Page>
            <Container>
                <CardNav />
                <Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardContainer ProjectList={ActiveProjects} />
                </Section>
                <Section>
                    <SectionTitle>Upcoming Launches</SectionTitle>
                    <CardContainer ProjectList={UpcomingProjects} />
                </Section>
                <Section>
                    <SectionTitle>Completed Launches</SectionTitle>
                    <CardContainer ProjectList={CompletedProjects} />
                </Section>
            </Container>
        </Page>
    );
};

export default LaunchpadHome;
