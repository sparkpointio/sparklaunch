import { createSlice } from '@reduxjs/toolkit'
import { ProjectState } from 'state/type'
import ProjectList  from 'config/dummy-data/Projects';

const initialState: ProjectState = { data: ProjectList }

export const projectSlice = createSlice({
    name: 'Projects',
    initialState,
    reducers: {}
})

export default projectSlice.reducer