import React, { useMemo } from 'react';
import { useProject } from 'state/hooks';
import Page from 'components/layout/Page';
import CardNav from 'components/CardNav';
import { STATE } from 'config/constants/type';
import Section, { Container, SectionTitle } from './styled';
import CardContainer from './components/CardContainer';


const LaunchpadHome: React.FC = () => {
    const { data: ProjectsLS } = useProject();

    const ActiveProjects = useMemo(() => ProjectsLS.filter((project) => project.status === STATE.active), [ProjectsLS]);
    const UpcomingProjects = useMemo(() => ProjectsLS.filter((project) => project.status === STATE.upcoming), [ProjectsLS]);
    const CompletedProjects = useMemo(
        () => ProjectsLS.filter((project) => project.status === STATE.completed),
        [ProjectsLS],
    );

    return (
        <Page>
            <Container>
                <CardNav />
                <Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardContainer ProjectList={ActiveProjects} />
                </Section>
                {UpcomingProjects.length !== 0 && (
                    <Section>
                        <SectionTitle>Upcoming Launches</SectionTitle>
                        <CardContainer ProjectList={UpcomingProjects} />
                    </Section>
                )}
                {CompletedProjects.length !== 0 && (
                    <Section>
                        <SectionTitle>Completed Launches</SectionTitle>
                        <CardContainer ProjectList={CompletedProjects} />
                    </Section>
                )}
            </Container>
        </Page>
    );
};

export default LaunchpadHome;
