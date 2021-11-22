import { IProjects } from 'config/constants/type';
import { BNB, FLASH, OWN, SRK, TOWN, ORE, TORE } from '../../index';
import { dateEnded, epochToDate } from '../../../utils';

const project: IProjects = {
    category: 'flashLoansIDO$1',
    category2: 'flashLoansIDO$2',
    address: '0x002',
    // sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : SRK ) ,
    sellingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? FLASH : SRK,
    buyingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : BNB,
    title: 'FlashLoans',
    token: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : SRK,
    symbol: 'FLASH',
    image: 'flash.png',
    desc: 'Flashloans.com is a new DeFi tool that allows users to create and perform a flash loan backed trade from an easy to use UI.',
    longDesc:
        'Flash loans are a new uncollateralized loan product in DeFi, empowering traders and DeFi users by enabling instant borrowing with no collateral required provided that the liquidity is returned to the pool within one transaction block.',
    longDesc2:
        'Flashloans.com will also be adding an additional layer of functionality with Flash tokens, allowing users to access bespoke Flash loan analytics, as well as enjoying reduced platform fees.',
    // longDesc3: 'This is just a test contract',
    ownSale: 0,
    wallpaperBg: 'flashtokenBG2.png',
    status: 'completed',
    startDate: epochToDate(1635868200),
    endDate: epochToDate(1636473000),
    hasDateEnded: dateEnded(1636473000),
    claimable: true,
    socMeds: [
        'flashloans.com',
        'twitter.com/ComFlashloans',
        'telegram.me/joinchat/HCAFABqRGjY77vIdI2nV9g',
        'medium.com/@flashloans',
    ],
};

export default project;
