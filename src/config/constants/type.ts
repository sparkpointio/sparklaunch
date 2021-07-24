import {Token} from "@sparkpointio/sparkswap-sdk";

export interface ITokens {
    name: string;
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    logoURI: string;
}

export interface IProjects {
    category?: string;
    address?: string;
    buyingCoin: Token;
    sellingCoin: Token;
    title: string;
    symbol: string;
    image: string;
    wallpaperBg?: string;
    desc: string;
    longDesc: string;
    longDesc2?: string | null
    longDesc3?: string | null
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

export interface ITransactionDetails {
    hash: string
    approval?: { tokenAddress: string; spender: string };
    summary?: string;
    lastCheckedBlockNumber?: number;
    addedTime: number
    confirmedTime?: number
    from: string;
}

export type PageMeta = {
    title: string
    description?: string
    image?: string
  }
