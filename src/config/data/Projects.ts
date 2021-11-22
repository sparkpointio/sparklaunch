import { IProjects } from 'config/constants/type';
import { BNB, FLASH, OWN, SRK, TOWN, ORE, TORE } from '../index';
import { dateEnded, epochToDate } from '../../utils';
// import outrace from './Projects/Outrace';
// import ownly from './Projects/Ownly';
// import flashloans from './Projects/Flashloans';
import {OwnlyProject, FlashLoansProject, OutraceProject } from './Project';

// const Projects = (IDOS as unknown) as {[key:string]: IProjects};
// const { OwnlyProject, FlashLoansProject, OutraceProject } = Projects;

const ProjectList: IProjects[] = [ 
    OwnlyProject,
    FlashLoansProject, 
    OutraceProject,
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
