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
    address?: string;
}

interface ListType {
    address: string;
}

export interface IAccountType {
    whiteList: ListType[]
}

export type PageMeta = {
    title: string
    description?: string
    image?: string
  }

  