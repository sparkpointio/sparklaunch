import {ethers} from 'ethers'
import {simpleRpcProvider} from 'utils/providers'
import {TokenAmount} from "@sparkpointio/sparkswap-sdk";

// Addresses
import {getLaunchPadAddress, ownlyLaunchPad} from 'utils/addressHelpers'

import launchpadABI from '../constants/abis/launchpad.json'
import {BNB, OWN} from "../config";
import {expandValue} from "./index";

const getContract = (abi: any, address: string, signer) => {
    const signerOrProvider = signer.provider.connection.url === 'metamask' ? signer : simpleRpcProvider

    return new ethers.Contract(address, abi, signerOrProvider)
}

export const getOwnlyLaunchpadContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
    return getContract(launchpadABI, ownlyLaunchPad(), signer)
}

export const getLaunchpadContract = (signer?: ethers.Signer | ethers.providers.Provider, category = 'ownlyLaunchPad') => {
    return getContract(launchpadABI, getLaunchPadAddress(category), signer)
}

export const calculateLaunchpadStats = async (contract, project) => {
    const totalForSaleTokens = new TokenAmount(project.sellingCoin, await contract.totalRewardTokens());
    const totalSoldTokens = new TokenAmount(project.sellingCoin, await contract.soldAmount());
    const remainingForSaleTokens = totalForSaleTokens.subtract(totalSoldTokens);
    const totalParticipants = await contract.totalParticipant();
    const tokenRate = new TokenAmount(project.buyingCoin, await contract.tokenRate())
    const totalSales = new TokenAmount(project.buyingCoin, await contract.totalRaise());
    const expectedSales = tokenRate.multiply(totalForSaleTokens);
    const percentage = totalSales.divide(expectedSales).multiply(BigInt(100));

    return {
        totalParticipants: totalParticipants.toString(),
        totalForSaleTokens: totalForSaleTokens.toExact(),
        totalSoldTokens: totalSoldTokens.toExact(),
        remainingForSale: remainingForSaleTokens.toExact(),
        totalSales: totalSales.toExact(),
        expectedSales: expectedSales.toSignificant(18),
        percentage: percentage.toSignificant(18),
        tokenRate: tokenRate.toExact()
    };
}

export const getAccountDetailsLaunchPad = async (contract, project, library, account) => {
    if (!account) {
        throw Error;
    }
    const details = await contract.getWhitelist(account);
    const tokenRate = new TokenAmount(project.buyingCoin, await contract.tokenRate())
    const dets = {
        balance: new TokenAmount(BNB, (await library.getBalance(account)).toBigInt()),
        amount: new TokenAmount(OWN, details._amount),
        maxPayableAmount: new TokenAmount(OWN, details._maxPayableAmount),
        rewardedAmount: new TokenAmount(OWN, details._rewardedAmount),
        redeemed: details._redeemed,
        whitelist: details._whitelist,
    }
    const maxExpendable = new TokenAmount(project.buyingCoin, expandValue(
        (dets.maxPayableAmount.subtract(dets.rewardedAmount)).multiply(tokenRate).toFixed(18), project.buyingCoin)
    )
    return {
        ... dets,
        'maxExpendable': maxExpendable,
    };
}

export const getRedeem = async (contract, account) => {
    if (!account) {
        throw Error;
    }

    const details = await contract.getWhitelist(account);

    return {
        redeemable: (!details._redeemed && details._whitelist ),
        amount: details._rewardedAmount
    }
}
