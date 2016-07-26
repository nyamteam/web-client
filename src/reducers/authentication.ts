import { LoginActionTypes, AuthAction } from '../actions/loginAction'

export interface AuthState {
    isAuthenticating: boolean
    isAuthenticated: boolean
    message?: string
}

const initialState: AuthState = {
    isAuthenticating: false,
    isAuthenticated: false,
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
                isAuthenticating: false,
                isAuthenticated: true
            }
        case LoginActionTypes.LOGGINFAILED:
            return {
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