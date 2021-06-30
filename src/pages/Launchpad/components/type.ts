export interface IProjects {
    title: string;
    image: string;
    desc: string;
    progress: number;
    totalRaise: number;
    ownSale: number;
    buyingCoin: string;
    socMeds?: Array<string>;
    wallpaperBg?: string;
    status?: string;
}