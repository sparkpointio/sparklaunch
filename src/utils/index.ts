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
