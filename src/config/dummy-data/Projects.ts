import { IProjects } from "config/constants/type";
import {BNB, OWN} from "../index";


const ProjectList: Array<IProjects> = [
    {
        category: 'ownlyLaunchPad',
        address: '0x001',
        sellingCoin: OWN,
        buyingCoin: BNB,
        title: 'Ownly',
        symbol: 'OWNLY',
        image: 'ownly.png',
        desc: 'OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists.',
        longDesc: 'Backed with over 2+ years of experience in the NFT and blockchain industry, Ownly is a governance token-based NFT-focused marketplace, curator, and a blockchain platform with an existing basket portfolio of NFT artworks that enable creators and collectors to optimize the authentic value of NFT assets.',
        longDesc2: '$OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists. Own the only true copy and there\'s nothing else like that in the world -- as if it\'s made just for you. ',
        longDesc3: 'Ownly is created to be a meeting place of artworks and collectors in the crypto space. It offers a Decentralized NFT Marketplace, Staking, NFT launching & curation, and NFT-focused & energy-efficient blockchain platform in a seamless, transparent, secure, inclusive, and interoperable approach.',
        price: 1,
        progress: 0,
        totalRaise: 253.46,
        ownSale: 2666666667,
        wallpaperBg: 'ownlyBG.jpg',
        status: "upcoming",
        socMeds: ['facebook.com', 'twitter.com', 'telegram.org', 'medium.com'],
    },
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
]

export default ProjectList;
