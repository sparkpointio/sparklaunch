import { ChainId, JSBI, Percent, Token, WETH } from '@sparkpointio/sparkswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

// import { bsc, fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
import { injected, bsc, walletconnect } from '../connectors'
// TODO
export const ROUTER_ADDRESS = '0xeB98E6e5D34c94F56708133579abB8a6A2aC2F26'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const EOS = new Token(ChainId.MAINNET, '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', 18, 'EOS', 'EOS Token')
export const DOT = new Token(ChainId.MAINNET, '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', 18, 'DOT', 'Polkadot Token')
export const ETH = new Token(ChainId.MAINNET, '0x1e33833a035069f42d68D1F53b341643De1C018D', 18, 'ETH', 'Ethereum Token')
export const BNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'Binance token')
export const TBNB = new Token(ChainId.BSCTESTNET, '0xae13d989dac2f0debff460ac112a837c89baa7cd', 18, 'WBNB', 'Binance token') 
export const OWN = new Token(ChainId.MAINNET, '0x7665cb7b0d01df1c9f9b9cc66019f00abd6959ba', 18, 'OWN', 'OWNLY Token')
export const ORE = new Token(ChainId.MAINNET, '0x7E899ebd70095C5AbBf9bBD8C2b5AC46C745bDEe', 8, 'ORE', 'OUTRACE Token')  // Test Token
export const TORE = new Token(ChainId.BSCTESTNET, '0xC714a6FB06a11187F50D8E18223c448f4a060aE2', 8, 'ORE', 'OUTRACE Token') // Test Token
export const FLASH = new Token(ChainId.MAINNET, '0x5f0366c9962193fA774cdce9602195593B49f23C', 18, 'FLASH', 'FLASH Token') 
export const TOWN = new Token(ChainId.BSCTESTNET, '0x446494947a1865d872ab43d383b8e264b4cf1bf0', 18, 'OWN', 'OWNLY Token') 
export const SRK = new Token(ChainId.BSCTESTNET, '0xe09B8661D80CF24dB230A167969d18B94a5a3266', 18, 'SRK', 'SRK Token')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]]
}
// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, EOS, DOT]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [ETH.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0xC3440c10c4F36f354eB591B19FafB4906d449B75', 18, 'SRKb', 'SparkPoint Token'),
      new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
    ],
    [BUSD, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  BSC: {
    connector: bsc,
    name: 'Binance Chain Wallet',
    iconName: 'binance.svg',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  // WALLET_LINK: {
  //   connector: walletlink,
  //   name: 'Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Use Coinbase Wallet app on mobile device',
  //   href: null,
  //   color: '#315CF5'
  // },
  // COINBASE_LINK: {
  //   name: 'Open in Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Open in Coinbase Wallet app.',
  //   href: 'https://go.cb-w.com/mtUDhEZPy1',
  //   color: '#315CF5',
  //   mobile: true,
  //   mobileOnly: true
  // },
  // FORTMATIC: {
  //   connector: fortmatic,
  //   name: 'Fortmatic',
  //   iconName: 'fortmaticIcon.png',
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true
  // },
  // Portis: {
  //   connector: portis,
  //   name: 'Portis',
  //   iconName: 'portisIcon.png',
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  //   mobile: true
  // }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
// export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
// export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
// export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
// export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
// export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
// export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
// export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// // if the price slippage exceeds this number, force the user to type 'confirm' to execute
// export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// // for non expert mode disable swaps above this
// export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// // used to ensure the user doesn't send so much ETH so they end up with <.01
// export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
// export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
