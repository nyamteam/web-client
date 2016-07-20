import { Action, Dispatch } from 'redux'

export enum ErrorActionTypes {
    THROWERROR
}

export interface ErrorAction extends Action {
    type: ErrorActionTypes
    errorMessage?: string
}