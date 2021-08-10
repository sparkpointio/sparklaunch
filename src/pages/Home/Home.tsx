import React from 'react';
import Page from 'components/layout/Page'
import HeaderSection from './HeaderSection'
import AboutSection from './AboutSection';
import ApplySection from './ApplySection';

const Home: React.FC = () => {
    return (
         <>
        <Page>
            <HeaderSection />
            <AboutSection />
            <ApplySection />
        </Page>
        </>
        
    );
};

export default Home;
