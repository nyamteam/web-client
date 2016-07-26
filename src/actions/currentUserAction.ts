import { Action, Dispatch } from 'redux'

import { User }  from '../documents/User'

export enum CurrentUserActionTypes {
    INIT_CURRENT_USER,
    REMOVE_CURRENT_USER
}

export interface CurrentUserAction extends Action {
    type: CurrentUserActionTypes
    user?: User
}

export const initCurrentUser = (user: User) => {
    return {
        type: CurrentUserActionTypes.INIT_CURRENT_USER,
        user: user
    }
}

export const removeCurrentUser = () => {
    return {
        type: CurrentUserActionTypes.REMOVE_CURRENT_USER
    }
}