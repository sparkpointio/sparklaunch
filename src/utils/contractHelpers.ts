import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'

// Addresses
import {
    getAddress,
    ownlyLaunchPad
} from 'utils/addressHelpers'

import launchpadABI from '../constants/abis/launchpad.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getOwnlyLaunchpadContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(launchpadABI, ownlyLaunchPad(), signer)
}
