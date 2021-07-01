import { IProjects } from 'pages/Launchpad/components/type';

export interface ProjectState {
    data: IProjects[]
}
  
export interface State {
    projects: ProjectState
  }