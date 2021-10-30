
import { IAccountType } from "config/constants/type"

const AccountList: IAccountType[] = [
    {
        project: '0x001',
        whiteList: [
            {
                address: '0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8'
            }
        ]
    },
    {
        project: '0x66bC605D68b471A3Fd8724137439D5857c3B1Caa',
        whiteList: [
            {
                address: "0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8",
            },
            {
                address: "0x7C11371ca161276DE5340A08B3f204F4c6c66e3a"
            }
        ]
    },
    {
        project: '0x7ca05EEeB1D4998FF58e719e7E074816DfBd45c1',
        whiteList: [
            {
                address: "0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8",
            }, 
            {
                address: "0x7C11371ca161276DE5340A08B3f204F4c6c66e3a"
            }
        ]
    }, {
        project: '0x004',
        whiteList: [
            { address: "0x847dfF6a30f4e69FF67E78aa37E4170EEae445a8"}
        ]
    }
]

export default AccountList