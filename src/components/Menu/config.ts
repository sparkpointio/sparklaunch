import { MenuEntry } from '@sparkpointio/sparkswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://sparkswap.finance/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://sparkswap.finance/#/pool'
      }
    ],
  },
  {
    label: 'Stake',
    icon: 'FarmIcon',
    items: [
      {
        label: "Farms",
        href: "https://stake.sparkswap.finance/#/farms",
      },
      {
        label: "Pools",
        href: "https://stake.sparkswap.finance/#/pools",
      },
      {
        label: "Old Farms/Pools",
        href: "https://app.srk.finance/#/stake",
      },
    ],
  },
  // {
  //   label: "Farm",
  //   icon: "FarmIcon",
  //   href: "https://app.srk.finance/#/stake",
  // },
  // {
  //   label: "Pool",
  //   icon: "PoolIcon",
  //   href: "/pools",
  // },
  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://bridge.sparkswap.finance/#/',
  },
  {
    label: 'Launch',
    icon: 'LaunchIcon',
    href: '/',
  },
  {
    label: 'Airdrop',
    icon: 'AirdropIcon',
    href: 'https://app.srk.finance/#/airdrop',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    items: [
      {
        label: 'Create',
        href: 'https://nft.sparkswap.finance/#/create',
      },
      {
        label: 'MyNFT',
        href: 'https://nft.sparkswap.finance/#/MyNFT',
      },
      {
        label: 'Marketplace',
        href: 'https://nft.sparkswap.finance/#/marketplace',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Info',
        href: 'https://sparkswap.info/#/home',
      },
      {
        label: 'Teams',
        href: 'https://srk.finance/team',
      },
      {
        label: 'Help',
        href: 'https://medium.com/theecosystem/a-beginners-guide-to-sparkswap-79f92a2f7074',
      },
    ]
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   initialOpenState: true,
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: '/swap'
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: '/pool'
  //     }
  //   ]
  // },
  /*
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://coinmarketcap.com/currencies/sparkpoint/",
      },
      {
        label: "Trade SRK",
        href: "https://srk.sh/trade",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "SparkDeFi",
        href: "https://srk.finance/",
      },
      {
        label: "SparkPoint",
        href: "https://sparkpoint.io/",
      },
      {
        label: "Github",
        href: "https://github.com/sparkpointio",
      },
      {
        label: "White Paper",
        href: "https://github.com/sparkpointio/sparkdefi-whitepaper/blob/main/WHITEPAPER.md",
      },
      {
        label: "Blog",
        href: "https://medium.com/theecosystem",
      },
    ],
  },
  */
]

export default config
