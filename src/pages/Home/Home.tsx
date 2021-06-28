import React from 'react';
import Page from 'components/layout/Page'
import HeaderSection from './HeaderSection'
import AboutSection from './AboutSection';

const Home: React.FC = () => {
    return (
        <Page>
            <HeaderSection />
            <AboutSection />
        </Page>
    );
};

export default Home;
