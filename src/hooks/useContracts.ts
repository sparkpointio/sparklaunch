import { useMemo } from 'react';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { getLaunchpadContract, getOwnlyLaunchpadContract, getTokenContract } from 'utils/contractHelpers';

// Imports below migrated from Exchange useContract.ts


// export const useOwnlyLaunchpad = () => {
//     const { library } = useActiveWeb3React()
//     return useMemo(() => getOwnlyLaunchpadContract(library.getSigner()), [library])
// }

export const useLaunchpadContract = (category) => {
    const { library } = useActiveWeb3React()
    return useMemo(() => getLaunchpadContract(library.getSigner(), category), [library, category])
}

export const useTokenContract = (address) => {
    const { library } = useActiveWeb3React()
    return useMemo(() => getTokenContract(address, library.getSigner()), [address, library])
}
