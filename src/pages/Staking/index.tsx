import CardNav from 'components/CardNav';
import Page from 'components/layout/Page';
import React, { useMemo } from 'react';
// import { usePool } from 'state/hooks';
import { Container, SectionTitle, Section } from './styled'
import CardContainer from './components/CardsContainer';

const PoolComponent: React.FC = () => {
    // const { data: PoolsLS } = usePool();
    const data = [
        {
            title: 'Ownly Pool',
            address: '0x001',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'live'
        },
        {
            title: 'Lonely Pool',
            address: '0x002',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'upcoming'
        },
        {
            title: 'Sadly Pool',
            address: '0x003',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'completed'
        },
        {
            title: 'Test Pool',
            address: '0x004',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'completed'
        },
        {
            title: 'Test2 Pool',
            address: '0x005',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'live'
        },
        {
            title: 'Test3 Pool',
            address: '0x006',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'upcoming'
        },
        {
            title: 'Test4 Pool',
            address: '0x007',
            stakeToken: 'SRK',
            rewardToken: 'OWNLY',
            apy: '488.37%',
            status: 'live'
        }
    ]
    const LivePools = data.filter(d => d.status === 'live');
    const UpcomingPools = data.filter(d => d.status === 'upcoming');
    const CompletedPools = data.filter(d => d.status === 'completed');
    
    return (
        <Page>
            <Container>
            <CardNav activeIndex={1} />
            <Section>
                <SectionTitle>Ongoing Pools</SectionTitle>
                <CardContainer pool={LivePools}/> 
            </Section>
            <Section>
                    <SectionTitle>Upcoming Launches</SectionTitle>
                    <CardContainer pool={UpcomingPools} />
                </Section>
                <Section>
                    <SectionTitle>Completed Launches</SectionTitle>
                    <CardContainer pool={CompletedPools} />
                </Section>
            </Container>
        </Page>
    )
}

export default PoolComponent;
