import { IProjects, IAccountType, IPoolInformation } from 'config/constants/type';

export interface ProjectState {
    data: IProjects[]
}

export interface AccountState {
    data: IAccountType[]
}

export interface PoolInformationState {
    data: IPoolInformation[]
}

export interface State {
    projects: ProjectState
    accounts: AccountState
    pools: PoolInformationState
  }
