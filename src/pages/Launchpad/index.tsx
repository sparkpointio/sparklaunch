import React, { useMemo } from 'react';
import { useProject } from 'state/hooks';
import Page from 'components/layout/Page';
import CardNav from 'components/CardNav';
import Section, { Container, SectionTitle} from './styled';
import CardContainer from './components/CardContainer';


const LaunchpadHome: React.FC = () => {
    const { data: ProjectsLS } = useProject();
    
    const ActiveProjects = useMemo(() => ProjectsLS.filter(project => project.status === "active"), [ProjectsLS])
    const UpcomingProjects = useMemo(() => ProjectsLS.filter(project => project.status === "upcoming"), [ProjectsLS])
    const CompletedProjects = useMemo(() => ProjectsLS.filter(project => project.status === "completed"), [ProjectsLS])


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
