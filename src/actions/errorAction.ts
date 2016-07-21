import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'

export enum ErrorActionTypes {
    THROWERROR
}

export interface ErrorAction extends Action {
    type: ErrorActionTypes
    errorMessage?: string
}

const throwedError = (errorMessage: string) => {
    return {
        type: ErrorActionTypes.THROWERROR,
        errorMessage: errorMessage
    }
}

export const throwErrror = (message: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(throwedError(message))
        dispatch(push('/error'))
    }
}
