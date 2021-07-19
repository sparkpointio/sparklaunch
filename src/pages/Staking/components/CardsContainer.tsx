import React from 'react'
import { CardGroup } from '../styled'
import Card from './PoolCard'

interface PoolProps {
    title: string;
    address: string;
    stakeToken: string;
    stakeToken2?: string;
    rewardToken: string;
    apy: string;
    status: string;
}

const CardContainer:React.FC<{pool?: PoolProps[]}> = ({pool}) => {
    return (
        <CardGroup>
            {
                pool?.map(p => (
                    <Card 
                        key={p.address}
                        pool={p}
                    />
                ))
            }
        </CardGroup>
    )
}

export default CardContainer

