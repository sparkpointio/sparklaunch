import { IProjects } from "config/constants/type";
import {BNB, TBNB, OWN , TOWN, SRK, FLASH} from "../index";


const ProjectList: Array<IProjects> = [
    {
        category: 'ownlyLaunchPad',
        // category2: 'ownlyLaunchPad1',
        address: '0x001',
        sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? OWN : TOWN ),
        buyingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : BNB ) ,
        title: 'Ownly',
        token: (process.env.REACT_APP_CHAIN_ID === "56" ? OWN : OWN ), 
        symbol: 'OWN',
        image: 'ownly.png',
        desc: 'OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists.',
        longDesc: 'Backed with over 2+ years of experience in the NFT and blockchain industry, Ownly is a governance token-based NFT-focused marketplace, curator, and a blockchain platform with an existing basket portfolio of NFT artworks that enable creators and collectors to optimize the authentic value of NFT assets.',
        longDesc2: '$OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists. Own the only true copy and there\'s nothing else like that in the world -- as if it\'s made just for you. ',
        longDesc3: 'Ownly is created to be a meeting place of artworks and collectors in the crypto space. It offers a Decentralized NFT Marketplace, Staking, NFT launching & curation, and NFT-focused & energy-efficient blockchain platform in a seamless, transparent, secure, inclusive, and interoperable approach.',
        ownSale: 2666666667,
        wallpaperBg: 'ownlyBG.jpg',
        status: "completed",
        claimable: true,
        socMeds: ['ownly.io', 'twitter.com/ownlyio', 't.me/ownlyio', 'medium.com/ownlyio'],
    },
    /*
    {
        category: 'testLaunchPad',
        // category2: 'ownlyLaunchPad1',
        address: '0x66bC605D68b471A3Fd8724137439D5857c3B1Caa',
        sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? OWN : SRK ),
        buyingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : BNB ) ,
        title: 'Test',
        token: (process.env.REACT_APP_CHAIN_ID === "56" ? BNB : SRK ),
        symbol: 'TST',
        image: 'ownly.png',
        desc: 'This is just a test contract',
        longDesc: 'This is just a test contract',
        longDesc2: 'This is just a test contract',
        longDesc3: 'This is just a test contract',
        ownSale: 2666666667,
        wallpaperBg: '',
        status: "active",
        claimable: true,
        socMeds: ['ownly.io', 'twitter.com/ownlyio', 't.me/ownlyio', 'medium.com/ownlyio'],
    },
    */
    {
        category: 'flashLoansIDO',
        // category2: 'ownlyLaunchPad1',
        address: '0x7ca05EEeB1D4998FF58e719e7E074816DfBd45c1',
        sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : SRK ) ,
        buyingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : BNB ) ,
        title: 'FlashLoans',
        token: (process.env.REACT_APP_CHAIN_ID === "56" ? BNB : SRK ),
        symbol: 'FLASH',
        image: 'flash.png',
        desc: 'Flashloans.com is a new DeFi tool that allows users to create and perform a flash loan backed trade from an easy to use UI.',
        longDesc: 'Flash loans are a new uncollateralized loan product in DeFi, empowering traders and DeFi users by enabling instant borrowing with no collateral required provided that the liquidity is returned to the pool within one transaction block.',
        longDesc2: 'Flashloans.com will also be adding an additional layer of functionality with Flash tokens, allowing users to access bespoke Flash loan analytics, as well as enjoying reduced platform fees.',
        // longDesc3: 'This is just a test contract',
        ownSale: 0,
        wallpaperBg: 'flashtokenBG.png',
        status: "active",
        claimable: false,
        socMeds: ['flashloans.com', 'twitter.com/ComFlashloans', 't.me/joinchat/HCAFABqRGjY77vIdI2nV9g', 'medium.com/@flashloans'],
    },
    {
        category: 'ownlyLaunchPad1',
        // category2: 'ownlyLaunchPad1',
        address: '0x004',
        sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? OWN : SRK ),
        buyingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : BNB ) ,
        title: 'Outrace',
        token: (process.env.REACT_APP_CHAIN_ID === "56" ? BNB : SRK ),
        symbol: 'ORE',
        image: 'ore.png',
        desc: 'Outrace is a one-of-a-kind play-to-earn NFT racing game showcasing its strategic concept and mechanics.',
        longDesc: 'The overall objective of the game is to win the race using the array of cars that can be purchased and customized using ORE token. ORE can be earned by racing in conqueror mode or in PVP ‘s sprint races. What makes this game so interesting is that it offers the player not only excitement and entertainment but enables them to earn crypto and earn prizes for their activity.',
        // longDesc3: 'This is just a test contract',
        ownSale: 0,
        wallpaperBg: 'oreBG.png',
        status: "upcoming",
        claimable: true,
        socMeds: ['outrace.game', 'twitter.com/outrace_ore', 't.me/Outrace', 'medium.com'],
    },
    // {
    //     category: 'testLaunchPad',
    //     category2: 'testLaunchPad1',
    //     address: '0x66bC605D68b471A3Fd8724137439D5857c3B1Caa',
    //     sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? OWN : TOWN ),
    //     buyingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : TBNB ) ,
    //     title: 'Ownly',
    //     symbol: 'OWN',
    //     image: 'ownly.png',
    //     desc: 'OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists.',
    //     longDesc: 'Backed with over 2+ years of experience in the NFT and blockchain industry, Ownly is a governance token-based NFT-focused marketplace, curator, and a blockchain platform with an existing basket portfolio of NFT artworks that enable creators and collectors to optimize the authentic value of NFT assets.',
    //     longDesc2: '$OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists. Own the only true copy and there\'s nothing else like that in the world -- as if it\'s made just for you. ',
    //     longDesc3: 'Ownly is created to be a meeting place of artworks and collectors in the crypto space. It offers a Decentralized NFT Marketplace, Staking, NFT launching & curation, and NFT-focused & energy-efficient blockchain platform in a seamless, transparent, secure, inclusive, and interoperable approach.',
    //     price: 1,
    //     progress: 0,
    //     totalRaise: 253.46,
    //     ownSale: 2666666667,
    //     wallpaperBg: 'ownlyBG.jpg',
    //     status: "completed",
    //     socMeds: ['ownly.io', 'twitter.com/ownlyio', 't.me/ownlyio', 'medium.com/ownlyio']
    // },
    // {
    //     category: 'ownlyLaunchPad',
    //     address: '0x004',
    //     sellingCoin: OWN,
    //     buyingCoin: BNB,
    //     title: 'Ownly',
    //     symbol: 'OWNLY',
    //     image: 'ownly.PNG',
    //     desc: 'CryptoArt is still a foreign concept to many artists. The Combination of art and blockchain seems too complicated. However, we believe its rather simple.',
    //     longDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    //     longDesc2: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
    //     price: 0.0000909,
    //     progress: 75,
    //     totalRaise: 150,
    //     ownSale: 165000000.0,
    //     wallpaperBg: 'ownlyBg.jpg',
    //     status: "upcoming",
    //     socMeds: ['facebook.com', 'twitter.com', 'telegram.org', 'medium.com'],
    // },
    // {
    //     category: 'ownlyLaunchPad',
    //     address: '0x005',
    //     sellingCoin: OWN,
    //     buyingCoin: BNB,
    //     title: 'Ownly',
    //     symbol: 'OWNLY',
    //     image: 'ownly.PNG',
    //     desc: 'CryptoArt is still a foreign concept to many artists. The Combination of art and blockchain seems too complicated. However, we believe its rather simple.',
    //     longDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    //     price: 0.0000909,
    //     progress: 75,
    //     totalRaise: 150,
    //     ownSale: 165000000.0,
    //     wallpaperBg: 'ownlyBg.JPG',
    //     status: "completed",
    //     socMeds: ['facebook.com', 'twitter.com', 'telegram.org', 'medium.com'],
    // },
    // {
    //     category: 'ownlyLaunchPad',
    //     address: '0x004',
    //     sellingCoin: OWN,
    //     buyingCoin: BNB,
    //     title: 'FlashLoans',
    //     symbol: 'FLASH',
    //     image: 'flash.png',
    //     desc: 'Flashloans.com is a new DeFi tool that allows users to create and perform a flash loan backed trade from an easy to use UI. ',
    //     longDesc: 'Flash loans are a new uncollateralized loan product in DeFi, empowering traders and DeFi users by enabling instant borrowing with no collateral required provided that the liquidity is returned to the pool within one transaction block.',
    //     longDesc2: 'Flashloans.com will also be adding an additional layer of functionality with Flash tokens, allowing users to access bespoke Flash loan analytics, as well as enjoying reduced platform fees.',
    //     price: 0.0000909,
    //     progress: 75,
    //     totalRaise: 150,
    //     endDate: '11-01 12:00:00',
    //     ownSale: 165000000.0,
    //     wallpaperBg: 'flashtokenBG.png',
    //     status: "upcoming",
    //     socMeds: ['flashloans.com', 'twitter.com/ComFlashloans', 't.me/joinchat/HCAFABqRGjY77vIdI2nV9g', 'medium.com/@flashloans'],
    // },
    // {
    //     category: 'ownlyLaunchPad',
    //     address: '0x005',
    //     sellingCoin: OWN,
    //     buyingCoin: BNB,
    //     title: 'Outrace',
    //     symbol: 'ORE',
    //     image: 'ore.png',
    //     desc: 'Outrace is a one-of-a-kind play-to-earn NFT racing game showcasing its strategic concept and mechanics. ',
    //     longDesc: 'The overall objective of the game is to win the race using the array of cars that can be purchased and customized using ORE token. ORE can be earned by racing in conqueror mode or in PVP ‘s sprint races. What makes this game so interesting is that it offers the player not only excitement and entertainment but enables them to earn crypto and earn prizes for their activity.',
    //     price: 0.0000909,
    //     progress: 75,
    //     totalRaise: 150,
    //     endDate: '11-01 17:00:00',
    //     ownSale: 165000000.0,
    //     wallpaperBg: 'oreBG.png',
    //     status: "upcoming",
    //     socMeds: ['outrace.game', 'twitter.com/outrace_ore', 't.me/Outrace', 'medium.com'],
    // },
]

export default ProjectList;
