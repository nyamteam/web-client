import { ActionTypes, AuthAction } from '../actions'

export interface AuthState {
    isAuthenticating: boolean
    isAuthenticated: boolean
    username?: string
    balance?: number
    message?: string
}

const initialState: AuthState = {
    isAuthenticating: false,
    isAuthenticated: false,
    username: null,
    balance: null,
    message: null
}

const authentication = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                isAuthenticating: true,
                isAuthenticated: false
            }
        case ActionTypes.LOGGINSUCCEEDED:
            return {
                username: action.username,
                isAuthenticating: false,
                isAuthenticated: true,
                balance: action.balance
            }
        case ActionTypes.LOGGINFAILED:
            return {
                username: action.username,
                isAuthenticating: false,
                isAuthenticated: false,
                message: action.message
            }
        case ActionTypes.LOGGEDOUT:
            return initialState
        default:
            return state
    }
}

export default authentication