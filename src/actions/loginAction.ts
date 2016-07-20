import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

import { ErrorActionTypes } from './errorAction'

import User from '../documents/User'

export enum LoginActionTypes {
    LOGIN_REQUEST,
    LOGGINSUCCEEDED,
    LOGGINFAILED,
    LOGGEDOUT
}

export interface AuthAction extends Action {
    type: LoginActionTypes
    username?: string
    password?: string
    user?: User
    message?: string
}

const loginRequest = () => {
    return {
        type: LoginActionTypes.LOGIN_REQUEST
    }
}

const loggedInSuccess = (username: string, user: User): AuthAction => {
    return {
        type: LoginActionTypes.LOGGINSUCCEEDED,
        username,
        user
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
            body: JSON.stringify({
                email: username,
                password: password,
            })
        })
        .then(function(response: any) {
            if (response.status >= 400) {
                dispatch({
                    type: ErrorActionTypes.THROWERROR,
                    errorMessage: __('Error : cannot connect to the server.')
                })
                dispatch(push('/error'))
            }
            return response.json();
        })
        .then(function(response: any) {
            if(response.user)
            {
                let user = new User();
                user.balance = response.user.balance
                user.email = response.user.email
                dispatch(loggedInSuccess(response.user.email, user))
                dispatch(push('/'))
            } else {
                dispatch(loggedInFailed(response.message))
            }
        })
        .catch(function(err: any) {
            dispatch({
                type: ErrorActionTypes.THROWERROR,
                errorMessage: __('Error : cannot connect to the server.')
            })
            dispatch(push('/error'))
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
                dispatch({
                    type: ErrorActionTypes.THROWERROR,
                    errorMessage: __('Bad response from server.')
                })
                dispatch(push('/error'))
            }
            dispatch(loggedOut())
            dispatch(push('/login'))
        })
        .catch(function(err:any) {
            dispatch({
                type: ErrorActionTypes.THROWERROR,
                errorMessage: __('Error : cannot connect to the server.')
            })
            dispatch(push('/error'))
        })
    }
}