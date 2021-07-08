export interface ITokens {
    name: string;
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    logoURI: string;
}

export interface IProjects {
    address?: string;
    buyingCoin: string;
    title: string;
    symbol: string;
    image: string;
    wallpaperBg?: string;
    desc: string;
    longDesc: string;
    price: number;
    progress: number;
    totalRaise: number;
    ownSale: number;
    status?: string;
    socMeds?: string[]
}

export interface IUserAccount {
    address: string;
    allocation: string;
    maxSwap: string;
}

export interface IPoolInformation {
    open: string;
    close: string;
    cap: number;
    totalUserParticipated: number;
    totalFundsSwapped?: number;
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

  