import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProjectState, AppThunk } from 'state/type'
import ProjectList  from 'config/data/Projects';


const initialState: ProjectState = { 
    selectedProject: null,
    data: ProjectList,
}


export const setProject = (address: string): AppThunk => (dispatch) => {
    dispatch(selectProject(address));
}

export const projectSlice = createSlice({
    name: 'Projects',
    initialState,
    reducers: {
        selectProject:  (state, action: PayloadAction<string>) => {
            state.selectedProject = action.payload
        }
    }
})


export const { selectProject } = projectSlice.actions;
export default projectSlice.reducer