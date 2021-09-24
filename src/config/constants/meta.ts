import { PageMeta } from './type'

export const DEFAULT_META: PageMeta = {
  title: 'SparkLaunch',
  description:
    'Refuel your rocket with SFUEL and travel to the moon with SparkSwap, the prodigious decentralized exchange on Binance Smart Chain.',
  image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | SparkLaunch - Ignite your token on SparkLaunch',
  },
  '/launch': {
    title: 'Launch | SparkDeFi'
  },
  '/projects': {
    title: 'Projects | SparkLaunch - Ignite your token on SparkLaunch!',
  },
  '/staking': {
    title: 'Staking | SparkDeFi',
  },
}
