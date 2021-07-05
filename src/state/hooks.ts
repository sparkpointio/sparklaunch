import { useSelector } from 'react-redux';
import { State } from './type';

export const useProject = () => {
    const projects = useSelector((state: State) => state.projects);
    return projects;
};

export const useFindProject = (address?: string | null) => {
    const project = useSelector((state: State) => {
        return state.projects.data.filter((p) => p.address === address);
    });

    return project;
};

export const useAccount = () => {
    const accounts = useSelector((state: State) => state.accounts.data);
    return accounts;
};

export const useAccountWhiteList = (acc?: string | null) => {
    const account = useSelector((state: State) =>
        state.accounts.data.map((acs) => {
            return acs.whiteList.filter((ls) => ls.address === acc);
        }),
    );
    return account;
};

export const usePools = () => {
    const pools = useSelector((state: State) => state.pools);
    return pools;
};

export const useGetPoolsByAddress = (address?: string | null) => {
    const pool = useSelector((state: State) => {
        return state.pools.data.filter((pl) => pl.projectAddress === address);
    })
    return pool;
}