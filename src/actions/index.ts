import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

export enum ActionTypes {
    LOGIN_REQUEST,
    LOGGEDIN,
    LOGGEDOUT
}

export interface AuthAction extends Action {
    type: ActionTypes
    username?: string
    password?: string
}

const loginRequest = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}

const loggedIn = (username: string): AuthAction => {
    return {
        type: ActionTypes.LOGGEDIN,
        username
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
        .then(function(response:any) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(user:any) {
            dispatch(loggedIn(user.user.email))
            dispatch(push('/'))
        })
        .catch(function(err:any) {
            console.log(err)
        })
    }
}

const loggedOut = () => {
    return {
        type: ActionTypes.LOGGEDOUT
    }
}

export const logout = () => {
    return (dispatch: Dispatch<any>) => {
        fetch('//localhost:1337/logout')
        .then(function(response:any) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            dispatch(loggedOut())
            dispatch(push('/login'))
        })
        .catch(function(err:any) {
            console.log(err)
        })
    }
}