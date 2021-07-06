  
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import projectReducer from './projects';
import accountReducer from './acounts';
import poolReducer from './pools';

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        projects: projectReducer,
        accounts: accountReducer,
        pools: poolReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppState = ReturnType<typeof store.getState>

export default store