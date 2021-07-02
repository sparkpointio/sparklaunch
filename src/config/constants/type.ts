export interface IProjects {
    title: string;
    symbol: string;
    image: string;
    desc: string;
    longDesc: string;
    price: string;
    progress: number;
    totalRaise: number;
    ownSale: number;
    buyingCoin: string;
    socMeds?: Array<string>;
    wallpaperBg?: string;
    status?: string;
    address?: string;
}

export interface IUserAccount {
    address: string;
    allocation: string;
    maxSwap: string;
}

export interface IPoolInformation {
    open: string;
    closes: string;
    cap: string;
    totalUserParticipated: string;
    totalFundsSwapped: string;
    buyingToken: string;
    projectAddress: string;
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

  