import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

export enum ActionTypes {
    THROWERROR
}

export interface GeneralAction extends Action {
    type: ActionTypes
    errorMessage?: string
}