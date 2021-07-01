import { IProjects } from 'config/constants/type';
import { useSelector } from 'react-redux';
import { State } from './type';


export const useProject = () => {
    const projects = useSelector((state: State) => state.projects);
    return projects;
}


export const useAccount = () => {
    const accounts = useSelector((state: State) => state.accounts.data);
    return accounts;
}

export const useAccountWhiteList = (acc?:string | null) => {
    const account = useSelector((state: State) => state.accounts.data.map(acs => {
        return acs.whiteList.filter(ls => ls.address === acc)
    }));
    return account;
} 