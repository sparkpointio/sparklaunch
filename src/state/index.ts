  
import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './projects';
import accountReducer from './acounts';
import poolReducer from './pools';
import swapReducer from './swap';
import tokenReducer from './tokens';

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        projects: projectReducer,
        accounts: accountReducer,
        pools: poolReducer,
        swaps: swapReducer, 
        tokens: tokenReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>

export default store