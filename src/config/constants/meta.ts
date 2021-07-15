import { PageMeta } from './type'

export const DEFAULT_META: PageMeta = {
  title: 'SparkDefi',
  description:
    'Refuel your rocket with SFUEL and travel to the moon with SparkSwap, the prodigious decentralized exchange on Binance Smart Chain.',
  image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | SparkDefi',
  },
  '/launch': {
    title: 'Launch | SparkDeFi'
  },
  '/launch/projects': {
    title: 'Projects | SparkDefi',
  },
  '/launch/staking': {
    title: 'Staking | SparkDefi',
  },
}