import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
    getLaunchpadContract,
    getOwnlyLaunchpadContract,
} from 'utils/contractHelpers'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { ChainId, WETH } from '@sparkpointio/sparkswap-sdk'


export const useOwnlyLaunchpad = () => {
    const { library } = useActiveWeb3React()
    return useMemo(() => getOwnlyLaunchpadContract(library.getSigner()), [library])
}

export const useLaunchpadContract = (category) => {
    const { library } = useActiveWeb3React()
    return useMemo(() => getLaunchpadContract(library.getSigner(), category), [library, category])
}
