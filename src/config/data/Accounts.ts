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
        // whiteList: FlashLoansAccountsWList,
        whiteList: [
            {
                address: "0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8"
            }
        ]
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
            {
                address: '0x8A672715e042f6e9d9B25C2ce9F84210e8206EF1'
            },
            {
                address: '0xaE0ED8517634C8Eb6bCb76998AAd2190D0CfE72e'
            },
            {
                address: '0xA5920b19E4793cF6AF2EE001df3e7317BF1cE42A'
            }
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
