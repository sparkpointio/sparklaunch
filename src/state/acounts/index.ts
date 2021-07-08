
import { createSlice } from '@reduxjs/toolkit';
import AccountList from 'config/dummy-data/Accounts';
import { AccountState } from '../type';

const initialState: AccountState = { 
    data: AccountList 
}

export const accountSlice = createSlice({
    name: 'Accounts',
    initialState,
    reducers: {}
});

export default accountSlice.reducer;