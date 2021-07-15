import React from 'react';
import { CardGroup } from '../styled';
import Card from './LaunchCard';
import { IProjects } from '../../../config/constants/type';

interface Props {
    ProjectList?: Array<IProjects>
} 

const CardContainer: React.FC<Props> = (props) => {
    const { ProjectList } = props;
    return (
        <CardGroup>
            {ProjectList?.map((item) => {
                const { address, buyingCoin, title, symbol,  image, wallpaperBg, desc, longDesc, price, progress, totalRaise, ownSale, status, socMeds } = item;
                return (
                    <Card
                        key={address}
                        address={address}
                        buyingCoin={buyingCoin}
                        title={title}
                        symbol={symbol}
                        image={image}
                        wallpaperBg={wallpaperBg}
                        desc={desc}
                        longDesc={longDesc}
                        price={price}
                        progress={progress}
                        totalRaise={totalRaise}
                        ownSale={ownSale}
                        status={status}
                        socMeds={socMeds}
                    />
                );
            })}
        </CardGroup>
    );
};

export default CardContainer;
