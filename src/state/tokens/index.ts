import { createSlice } from '@reduxjs/toolkit';
import TokenList from 'config/dummy-data/Tokens';
import { TokenState } from 'state/type';

const initialState: TokenState = {
    data: TokenList
  }

export const tokenSlice = createSlice({
    name: "Tokens",
    initialState,
    reducers: {},
})

// export const { } = tokenSlice.actions
export default tokenSlice.reducer;