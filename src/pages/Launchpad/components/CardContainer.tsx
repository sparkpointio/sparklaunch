import React from 'react';
// import ProjectList from 'config/dummy-data/Projects';
import { CardGroup } from '../styled';
import Card from './LaunchCard';
import { IProjects } from './type';

interface Props {
    ProjectList?: Array<IProjects>
} 

const CardContainer: React.FC<Props> = (props) => {
    const { ProjectList } = props;
    return (
        <CardGroup>
            {ProjectList?.map((item) => {
                const { title, image, desc, progress, totalRaise, ownSale, buyingCoin, socMeds, wallpaperBg, status, address } = item;
                return (
                    <Card
                        title={title}
                        image={image}
                        wallpaperBg={wallpaperBg}
                        desc={desc}
                        progress={progress}
                        totalRaise={totalRaise}
                        ownSale={ownSale}
                        buyingCoin={buyingCoin}
                        socMeds={socMeds}
                        status={status}
                        address={address}
                    />
                );
            })}
        </CardGroup>
    );
};

export default CardContainer;
