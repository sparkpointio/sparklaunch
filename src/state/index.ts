  
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import projectReducer from './projects';

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        projects: projectReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store