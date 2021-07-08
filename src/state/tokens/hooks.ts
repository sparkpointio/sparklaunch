import { useAppSelector, useAppDispatch } from "state/hooks";


export const useAllTokens = () => useAppSelector((state) => state.tokens.data);
export const useSelectToken = (address: string) => useAppSelector((state) => state.tokens.data.find(t => t.address === address));