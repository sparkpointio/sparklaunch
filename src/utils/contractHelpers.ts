import { ethers } from 'ethers';
import { simpleRpcProvider } from 'utils/providers';
import { TokenAmount } from '@sparkpointio/sparkswap-sdk';

// Addresses
import { getLaunchPadAddress, ownlyLaunchPad } from 'utils/addressHelpers';

import launchpadABI from '../constants/abis/launchpad.json';
import { BNB, OWN } from '../config';
import { expandValue } from './index';
import { ERC20_ABI } from '../constants/abis/erc20';

const getContract = (abi: any, address: string, signer) => {
    const signerOrProvider = signer.provider.connection.url === 'metamask' ? signer : simpleRpcProvider;

    return new ethers.Contract(address, abi, signerOrProvider);
};

export const getOwnlyLaunchpadContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
    return getContract(launchpadABI, ownlyLaunchPad(), signer);
};

export const getLaunchpadContract = (signer?: ethers.Signer | ethers.providers.Provider, category?: string) => {
    return getContract(launchpadABI, getLaunchPadAddress(category), signer);
};

export const getTokenContract = (contractAddress, signer?: ethers.Signer | ethers.providers.Provider) => {
    return getContract(ERC20_ABI, contractAddress, signer);
};

const getLaunchPadStats = async (contract, project) => {
    const totalSales = new TokenAmount(project.buyingCoin, await contract.totalRaise());
    const totalRewards = await contract.totalRewardTokens();
    const tokenRate = new TokenAmount(project.buyingCoin, await contract.tokenRate());
    const totalForSaleTokens = new TokenAmount(project.sellingCoin, totalRewards);
    const expectedSales = tokenRate.multiply(totalForSaleTokens);
    const totalSoldTokens = new TokenAmount(project.sellingCoin, await contract.soldAmount());
    const remainingForSaleTokens = totalForSaleTokens.subtract(totalSoldTokens);
    const totalParticipants = await contract.totalParticipant();
    const percentage = totalSales.divide(expectedSales).multiply(BigInt(100));

    return {
        totalParticipants,
        totalForSaleTokens,
        totalSoldTokens,
        remainingForSaleTokens,
        totalSales,
        expectedSales,
        percentage,
        tokenRate,
    };
};

export const calculateLaunchpadStats = async (contract1, project, contract2 = null) => {
    const c1Stats = await getLaunchPadStats(contract1, project);

    let totalSales = c1Stats.totalSales;
    let totalParticipants = c1Stats.totalParticipants;
    const expectedSales = c1Stats.expectedSales;
    let percentage = c1Stats.percentage;
    let totalSoldTokens = c1Stats.totalSoldTokens;

    if (project.category2 && contract2) {
        const c2Stats = await getLaunchPadStats(contract2, project);

        totalSales = totalSales.add(c2Stats.totalSales);
        totalParticipants = totalParticipants.add(c2Stats.totalParticipants);
        percentage = totalSales.divide(expectedSales).multiply(BigInt(100));
        totalSoldTokens = totalSoldTokens.add(c2Stats.totalSoldTokens);
    }

    return {
        totalParticipants: totalParticipants.toString(),
        totalForSaleTokens: c1Stats.totalForSaleTokens.toExact(),
        totalSoldTokens: totalSoldTokens.toExact(),
        remainingForSale: c1Stats.remainingForSaleTokens.toExact(),
        totalSales: totalSales.toExact(),
        expectedSales: expectedSales.toSignificant(18),
        percentage: percentage.toSignificant(18),
        tokenRate: c1Stats.tokenRate.toExact(),
    };
};

export const getEndedStatus = async (contract) => {
    return contract?.isFinished.call();
};

export const checkEnded = async (contract1, contract2) => {
    const round1 = await getEndedStatus(contract1);
    let round2 = false;
    if (contract1.address !== contract2.address) {
        round2 = await getEndedStatus(contract2);
    }
    return {
        'round1': round1,
        'round2': round2,
    };
};

export const getAccountDetailsLaunchPad = async (contract, project, library, account) => {
    if (!account) {
        throw Error;
    }
    const details = await contract.getWhitelist(account);
    const tokenRate = new TokenAmount(project.buyingCoin, await contract.tokenRate());
    const dets = {
        balance: new TokenAmount(BNB, (await library.getBalance(account)).toBigInt()),
        amount: new TokenAmount(OWN, details._amount),
        maxPayableAmount: new TokenAmount(OWN, details._maxPayableAmount),
        rewardedAmount: new TokenAmount(OWN, details._rewardedAmount),
        redeemed: details._redeemed,
        whitelist: details._whitelist,
    };
    const maxExpendable = new TokenAmount(project.buyingCoin, expandValue(
        (dets.maxPayableAmount).multiply(tokenRate).toFixed(18), project.buyingCoin),
    );
    return {
        ...dets,
        'maxExpendable': maxExpendable,
    };
};

export const getRedeem = async (contract, account) => {
    if (!account) {
        throw Error;
    }

    const details = await contract.getWhitelist(account);

    return {
        redeemable: (!details._redeemed && details._whitelist),
        amount: details._rewardedAmount,
    };
};
