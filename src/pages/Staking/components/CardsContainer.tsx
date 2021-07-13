import React from 'react'
import { CardGroup } from '../styled'
import Card from './PoolCard'

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
        title: 'Ownly Pool',
        address: '0x001',
        stakeToken: 'SRK',
        rewardToken: 'OWNLY',
        apy: '488.37%',
        status: 'live'
    },
    {
        title: 'Ownly Pool',
        address: '0x001',
        stakeToken: 'SRK',
        rewardToken: 'OWNLY',
        apy: '488.37%',
        status: 'live'
    },
    {
        title: 'Ownly Pool',
        address: '0x001',
        stakeToken: 'SRK',
        rewardToken: 'OWNLY',
        apy: '488.37%',
        status: 'live'
    }
]

const CardContainer:React.FC = () => {
    return (
        <CardGroup>
            {
                data.map(pool => (
                    <Card 
                        pool={pool}
                    />
                ))
            }
        </CardGroup>
    )
}

export default CardContainer