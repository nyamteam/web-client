import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

import { ErrorActionTypes, throwErrror } from './errorAction'
import { addedService } from './serviceAction'
import { CurrentUserActionTypes, initCurrentUser, removeCurrentUser } from './currentUserAction'

import { User } from '../documents/User'


export const LoginActionTypes = {
    LOGIN_REQUEST: 'REMOVE_CURRENT_USER',
    LOGGINSUCCEEDED: 'LOGGINSUCCEEDED',
    LOGGINFAILED: 'LOGGINFAILED',
    LOGGEDOUT: 'LOGGEDOUT'
}

export interface AuthAction extends Action {
    type: string
    message?: string
}

const loginRequest = () => {
    return {
        type: LoginActionTypes.LOGIN_REQUEST
    }
}

const loggedInSuccess = (): AuthAction => {
    return {
        type: LoginActionTypes.LOGGINSUCCEEDED
    }
}

const loggedInFailed = (message: string): AuthAction => {
    return {
        type: LoginActionTypes.LOGGINFAILED,
        message
    }
}

export const login = (username: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loginRequest())
        fetch('//localhost:1337/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                email: username,
                password: password,
            })
        })
        .then(function(response: any) {
            if (response.status >= 400) {
                dispatch(throwErrror(__('Bad response from server.')))
            }
            return response.json();
        })
        .then(function(response: any) {
            if(response.user)
            {
                let user = response.user
                dispatch(initCurrentUser(user))
                dispatch(loggedInSuccess())
                dispatch(push('/'))
            } else {
                dispatch(loggedInFailed(response.message))
            }
        })
        .catch(function(err: any) {
            dispatch(throwErrror(__('Error : cannot connect to the server.')))
        })
    }
}

const loggedOut = () => {
    return {
        type: LoginActionTypes.LOGGEDOUT
    }
}

export const logout = () => {
    return (dispatch: Dispatch<any>) => {
        fetch('//localhost:1337/logout')
        .then(function(response:any) {
            if (response.status >= 400) {
                dispatch(throwErrror(__('Bad response from server.')))
            }
            dispatch(removeCurrentUser())
            dispatch(loggedOut())
            dispatch(push('/login'))
        })
        .catch(function(err:any) {
            dispatch(throwErrror(__('Error : cannot connect to the server.')))
        })
    }
}