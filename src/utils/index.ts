import {parseUnits} from "@ethersproject/units";

export function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
  }

export const expandValue = (value, token) => {
    if (token.decimals === 0) {
        throw Error
    }
    return value? parseUnits(value, token.decimals).toString() : BigInt(0);
}

export const epochToDate = (epochTime) => {
    const date = new Date(0); // The 0 there is the key, which sets the date to the epoch
    date.setUTCSeconds(epochTime);

    return date;
}

export const dateEnded = (endDate) => {
    const current = new Date();
    endDate = epochToDate(endDate);

    return current.getTime() > endDate.getTime()
}

