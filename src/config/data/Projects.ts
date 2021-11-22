import { IProjects } from 'config/constants/type';
import { BNB, FLASH, OWN, SRK, TOWN, ORE, TORE } from '../index';
import { dateEnded, epochToDate } from '../../utils';
import {OwnlyProject, FlashLoansProject, OutraceProject } from './Project';

const ProjectList: IProjects[] = [ 
    OwnlyProject,
    FlashLoansProject, 
    OutraceProject,
];

export default ProjectList;
