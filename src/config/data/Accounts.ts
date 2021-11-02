import { IAccountType } from 'config/constants/type';
import { FlashLoansAccountsWList } from './Whitelist'

const AccountList: IAccountType[] = [
    {
        project: '0x001',
        whiteList: [
            {
                address: '0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8',
            },
        ],
    },
    {
        project: '0x002',
        whiteList: FlashLoansAccountsWList,
    },
    {
        project: '0x003',
        whiteList: [
            {
                address: '0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8',
            },
            {
                address: '0x7C11371ca161276DE5340A08B3f204F4c6c66e3a',
            },
        ],
    },
    /* Tester IDO whitelisted */ 
    {
        project: 'tester',
        whiteList: [
            {
                address: '0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8'
            },
            {
                address: '0x7C11371ca161276DE5340A08B3f204F4c6c66e3a',
            },
        ]
    }
];

export default AccountList;
