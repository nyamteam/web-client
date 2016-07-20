import { LoginActionTypes, AuthAction } from '../actions/loginAction'
import User from '../documents/User'

export interface AuthState {
    isAuthenticating: boolean
    isAuthenticated: boolean
    username?: string
    user?: User
    message?: string
}

const initialState: AuthState = {
    isAuthenticating: false,
    isAuthenticated: false,
    username: null,
    user: null,
    message: null
}

const authentication = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN_REQUEST:
            return {
                isAuthenticating: true,
                isAuthenticated: false
            }
        case LoginActionTypes.LOGGINSUCCEEDED:
            return {
                username: action.username,
                isAuthenticating: false,
                isAuthenticated: true,
                user: action.user
            }
        case LoginActionTypes.LOGGINFAILED:
            return {
                username: action.username,
                isAuthenticating: false,
                isAuthenticated: false,
                message: action.message
            }
        case LoginActionTypes.LOGGEDOUT:
            return initialState
        default:
            return state
    }
}

export default authentication