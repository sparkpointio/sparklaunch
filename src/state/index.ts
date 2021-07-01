  
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import projectReducer from './projects';
import accountReducer from './acounts';

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        projects: projectReducer,
        accounts: accountReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store