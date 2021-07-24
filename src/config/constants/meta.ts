import { PageMeta } from './type'

export const DEFAULT_META: PageMeta = {
  title: 'SparkDeFi',
  description:
    'Refuel your rocket with SFUEL and travel to the moon with SparkSwap, the prodigious decentralized exchange on Binance Smart Chain.',
  image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | SparkDeFi',
  },
  '/launch': {
    title: 'Launch | SparkDeFi'
  },
  '/projects': {
    title: 'Projects | SparkDeFi',
  },
  '/staking': {
    title: 'Staking | SparkDeFi',
  },
}
