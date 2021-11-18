import { IProjects } from 'config/constants/type';
import { BNB, FLASH, OWN, SRK, TOWN, ORE, TORE } from '../index';
import { dateEnded, epochToDate } from '../../utils';

const ProjectList: Array<IProjects> = [
    {
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
        socMeds: ['ownly.io', 'twitter.com/ownlyio', 't.me/ownlyio', 'medium.com/ownlyio'],
    },
    {
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
            't.me/joinchat/HCAFABqRGjY77vIdI2nV9g',
            'medium.com/@flashloans',
        ],
    },
    {
        category: 'outRaceIDO$1',
        // category2: '',
        address: '0x003',
        sellingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? ORE : TORE,
        buyingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : BNB,
        title: 'Outrace',
        token: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : TORE,
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
            't.me/Outrace',
            'medium.com/@OutraceOfficial'
        ],
    },

    /* For testing section
     ** Sample IDOs
     */

    // {
    //     category: 'testLaunchPad$1',
    //     category2: 'testLaunchPad$2',
    //     address: 'tester',
    //     sellingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? OWN : SRK,
    //     buyingCoin: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : TBNB,
    //     title: 'Test',
    //     token: process.env.REACT_APP_CHAIN_ID === '56' ? BNB : SRK,
    //     symbol: 'TST',
    //     image: 'ownly.png',
    //     desc: 'This is just a test contract',
    //     longDesc: 'This is just a test contract',
    //     longDesc2: 'This is just a test contract',
    //     longDesc3: 'This is just a test contract',
    //     ownSale: 2666666667,
    //     wallpaperBg: '',
    //     status: 'active',
    //     startDate: epochToDate(1635771600),
    //     endDate: epochToDate(1635944400),
    //     hasDateEnded: dateEnded(1635944400),
    //     claimable: true,
    //     socMeds: ['ownly.io', 'twitter.com/ownlyio', 't.me/ownlyio', 'medium.com/ownlyio'],
    // },
];

export default ProjectList;
