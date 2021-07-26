import React, { useMemo } from 'react';
import { useProject } from 'state/hooks';
import Page from 'components/layout/Page';
import { useWeb3React } from '@web3-react/core';
import Developers from 'config/dummy-data/Testers';
import CardNav from 'components/CardNav';
import { STATE } from 'config/constants/type';
import Section, { Container, SectionTitle } from './styled';
import CardContainer from './components/CardContainer';

const LaunchpadHome: React.FC = () => {
    const { data: ProjectsLS } = useProject();
    const { account } = useWeb3React();
    const ActiveProjects = useMemo(() => ProjectsLS.filter((project) => project.status === STATE.active), [ProjectsLS]);
    const UpcomingProjects = useMemo(() => ProjectsLS.filter((project) => project.status === STATE.upcoming), [ProjectsLS]);
    const CompletedProjects = useMemo(
        () => ProjectsLS.filter((project) => project.status === STATE.completed),
        [ProjectsLS],
    );
    const DeveloperModeProjects = useMemo(() => ProjectsLS.filter((project) => project.status === STATE.developer), [ProjectsLS]);

    // Check if account is tester
    const developer = Developers.find(dev => dev.address === account);
    return (
        <Page>
            <Container>
                <CardNav />
                {ActiveProjects.length !==0 && (<Section>
                    <SectionTitle>Ongoing Launches</SectionTitle>
                    <CardContainer ProjectList={ActiveProjects} />
                </Section>
                )}
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

                {/* For Testing the project  */}

               {developer && DeveloperModeProjects.length !== 0 && (
               <Section>
                    <SectionTitle>Developer Mode Launches</SectionTitle>
                    <CardContainer ProjectList={DeveloperModeProjects} />
                </Section>
                )}
            </Container>
        </Page>
    );
};

export default LaunchpadHome;
