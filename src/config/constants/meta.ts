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
  '/competition': {
    title: 'Trading Battle | SparkDefi',
  },
  '/prediction': {
    title: 'Prediction | SparkDefi',
  },
  '/farms': {
    title: 'Farms | SparkDefi',
  },
  '/launch': {
    title: 'Launch | SparkDeFi'
  },
  '/launch/home': {
    title: 'Projects | SparkDefi',
  },
  '/lottery': {
    title: 'Lottery | SparkDefi',
  },
  '/collectibles': {
    title: 'Collectibles | SparkDefi',
  },
  '/ifo': {
    title: 'Initial Farm Offering | SparkDefi',
  },
  '/teams': {
    title: 'Leaderboard | SparkDefi',
  },
  '/profile/tasks': {
    title: 'Task Center | SparkDefi',
  },
  '/profile': {
    title: 'Your Profile | SparkDefi',
  },
}