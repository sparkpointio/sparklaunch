import { IProjects } from 'config/constants/type';
import { BNB, FLASH, OWN, SRK, TOWN, ORE, TORE } from '../../index';
import { dateEnded, epochToDate } from '../../../utils';

const project:IProjects = {
    category: 'ownlyLaunchPad$1',
    category2: 'ownlyLaunchPad$2',
    address: '0x001',
    sellingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? OWN : TOWN,
    buyingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : BNB,
    title: 'Ownly',
    token: process.env.REACT_APP_CHAIN_ID === '56' ? OWN : OWN,
    symbol: 'OWN',
    image: 'ownly.png',
    desc: 'OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists.',
    longDesc:
        'Backed with over 2+ years of experience in the NFT and blockchain industry, Ownly is a governance token-based NFT-focused marketplace, curator, and a blockchain platform with an existing basket portfolio of NFT artworks that enable creators and collectors to optimize the authentic value of NFT assets.',
    longDesc2:
        '$OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists. Own the only true copy and there\'s nothing else like that in the world -- as if it\'s made just for you. ',
    longDesc3:
        'Ownly is created to be a meeting place of artworks and collectors in the crypto space. It offers a Decentralized NFT Marketplace, Staking, NFT launching & curation, and NFT-focused & energy-efficient blockchain platform in a seamless, transparent, secure, inclusive, and interoperable approach.',
    ownSale: 2666666667,
    startDate: epochToDate(1627455600),
    endDate: epochToDate(1627628400),
    hasDateEnded: dateEnded(1627628400),
    wallpaperBg: 'ownlyBG.jpg',
    status: 'completed',
    claimable: true,
    socMeds: ['ownly.io', 'twitter.com/ownlyio', 'telegram.me/ownlyio', 'medium.com/ownlyio'],
}

export default project;