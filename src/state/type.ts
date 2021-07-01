import { IProjects, IAccountType } from 'config/constants/type';

export interface ProjectState {
    data: IProjects[]
}

export interface AccountState {
    data: IAccountType[]
}
  
export interface State {
    projects: ProjectState
    accounts: AccountState
  }
