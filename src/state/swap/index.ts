import { createReducer } from '@reduxjs/toolkit';
import { SwapState } from '../type';
import { Field, typeInput } from './action';

const initialState: SwapState = {
    independentField: Field.INPUT,
    typedValue: '',
    [Field.INPUT]: {
      currencyId: '',
    },
    [Field.OUTPUT]: {
      currencyId: '',
    },
  }

export default createReducer<SwapState>(initialState, (builder) => 
    builder
        .addCase(typeInput, (state, { payload: { field, typedValue }}) => {
            return {
                ...state,
                independentField: field,
                typedValue
            }
        })
)

