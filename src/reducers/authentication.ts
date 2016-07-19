import { ActionTypes, AuthAction } from '../actions'

export interface AuthState {
    isAuthenticating: boolean
    isAuthenticate: boolean
    username?: string
    balance?: number
    message?: string
}

const initialState: AuthState = {
    isAuthenticating: false,
    isAuthenticate: false,
    username: null,
    balance: null,
    message: null
}

const authentication = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                isAuthenticating: true,
                isAuthenticate: false
            }
        case ActionTypes.LOGGEDINSUCCESS:
            return {
                username: action.username,
                isAuthenticating: false,
                isAuthenticate: true,
                balance: action.balance
            }
        case ActionTypes.LOGGEDINFAILED:
            return {
                username: action.username,
                isAuthenticating: false,
                isAuthenticate: false,
                message: action.message
            }
        case ActionTypes.LOGGEDOUT:
            return initialState
        default:
            return state
    }
}

export default authentication