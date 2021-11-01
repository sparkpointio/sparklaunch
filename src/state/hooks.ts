import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setProject } from './actions';
import { AppDispatch, AppState } from './index';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useProject = () => {
    const projects = useAppSelector((state) => state.projects);
    return projects;
};

export const useFindProject = () => {
    const data = useAppSelector((state) => state.projects.selectedProject);
    return data;
};

export const useSetProject = (address?: string | null) => {
    const dispatch = useAppDispatch();
    if (!address) {
        return '';
    }
    dispatch(setProject(address));
    return address;
};

export const useFindProjectByAddress = (address?: string | null) => {
    const project = useAppSelector((state) => state.projects.data.filter((p) => p.address === address));
    return project[0];
};

export const useAccount = () => {
    const accounts = useAppSelector((state) => state.accounts.data);
    return accounts;
};

export const useAccountWhiteList = (acc: string | null, project: string | null) => {
    const account = useAppSelector((state) => {

        const data = state.accounts.data.find((prj) => {
            return prj.project === project;
        });
        if (!data) {
            throw new Error('Error');
        }
        return data.whiteList.find((ls) => ls.address === acc?.toLowerCase());
    });
    return account;
};


export const usePools = () => {
    const pools = useAppSelector((state) => state.pools);
    return pools;
};

export const useGetPoolsByAddress = (address?: string | null) => {
    const pool = useAppSelector((state) => {
        return state.pools.data.filter((pl) => pl.projectAddress === address);
    });
    return pool[0];
};
