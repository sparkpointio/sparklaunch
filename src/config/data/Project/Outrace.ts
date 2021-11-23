import { IProjects } from 'config/constants/type';
import { BNB, FLASH, OWN, SRK, TOWN, ORE, TORE } from '../../index';
import { dateEnded, epochToDate } from '../../../utils';

const project:IProjects = {
    category: 'outRaceIDO$1',
    category2: 'outRaceIDO$2',
    address: '0x003',
    sellingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? ORE : TORE,
    buyingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : BNB,
    title: 'Outrace',
    token: process.env.REACT_APP_CHAIN_ID === '56' ? ORE : TORE,
    symbol: 'ORE',
    image: 'ore.png',
    desc: 'Outrace is a one-of-a-kind play-to-earn NFT racing game showcasing its strategic concept and mechanics.',
    longDesc:
        'Outrace is a one-of-a-kind play-to-earn NFT racing game showcasing its strategic concept and mechanics. These includes card management; dice roll management and stats management. The overall objective of the game is to win the race using the array of cars that can be purchased and customized using ORE token. ORE can be earned by racing in conqueror mode or in PVP ‘s sprint races. What makes this game so interesting is that it offers the player not only excitement and entertainment but enables them to earn crypto and earn prizes for their activity.',
    // longDesc3: 'This is just a test contract',
    ownSale: 0,
    wallpaperBg: 'oreBG6.png',
    status: 'active',
    startDate: epochToDate(1637586000),
    endDate: epochToDate(1637758800),
    // hasDateEnded: dateEnded(1637596800),
    claimable: false,
    distributionType: 'Vesting',
    socMeds: [
        'outrace.game',
        'twitter.com/outrace_ore',
        'telegram.me/Outrace',
        'medium.com/@OutraceOfficial'
    ],
}

export default project