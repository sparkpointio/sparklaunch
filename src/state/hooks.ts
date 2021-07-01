import { IProjects } from 'pages/Launchpad/components/type';
import { useSelector } from 'react-redux';
import { State } from './type';

export const useProject = ()=> {
    const projects = useSelector((state: State) => state.projects);
    return projects;
}