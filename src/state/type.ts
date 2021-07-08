import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import { IProjects, IAccountType, IPoolInformation, ITokens } from 'config/constants/type';
import { Field } from './swap/action';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface SwapState { 
    readonly independentField: Field;
    readonly typedValue: string;
    readonly [Field.INPUT]: {
        readonly currencyId: string | undefined
      }
      readonly [Field.OUTPUT]: {
        readonly currencyId: string | undefined
      }
}

export interface TokenState { 
    data: ITokens[];
}

export interface ProjectState {
    selectedProject?: string | null;
    data: IProjects[];
}

export interface AccountState {
    data: IAccountType[]
}

export interface PoolInformationState {
    data: IPoolInformation[]
}

export interface State {
    projects: ProjectState
    accounts: AccountState
    pools: PoolInformationState
  }
