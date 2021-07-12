import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { Field, typeInput } from 'state/swap/action';

export function useSwapState() {
    return useAppSelector((state) => state.swaps)
}

export function useSwapActionHandlers(): {
    onUserInput: (field: Field, typedValue: string) => void
} {
    const dispatch = useAppDispatch();
   
    const onUserInput = useCallback((field: Field, typedValue: string) => {
        dispatch(typeInput({field, typedValue}));
    }, [dispatch])


    return {
        onUserInput
    }
}   