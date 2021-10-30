import {Token} from "@sparkpointio/sparkswap-sdk";


export type Status = 'active' | 'upcoming' | 'completed' | null;

export const STATE:{active: Status; upcoming: Status; completed: Status} = {
    active: 'active',
    upcoming: 'upcoming',
    completed: 'completed'
}

export interface ITokens {
    name: string;
    symbol: string;
    address: string;
    chainId: number;
    decimals: number;
    logoURI: string;
}

export interface IProjects {
    category2?: string;
    category?: string;
    address?: string;
    buyingCoin?: Token;
    sellingCoin?:  Token;
    title: string;
    token?: Token ;
    symbol: string;
    image: string;
    wallpaperBg?: string;
    desc: string;
    longDesc?: string;
    longDesc2?: string | null
    longDesc3?: string | null
    endDate?: string;
    ownSale: number;
    status?: Status;
    claimable?: boolean;
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
    project: string;
    whiteList: ListType[];
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

