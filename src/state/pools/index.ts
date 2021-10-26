import { createSlice } from '@reduxjs/toolkit'
import PoolList from 'config/data/Pool';
import { PoolInformationState } from 'state/type';


const initialState:PoolInformationState = { data: PoolList};

const poolSlice = createSlice({
    name: "Pools",
    initialState,
    reducers: {}
})

export default poolSlice.reducer;