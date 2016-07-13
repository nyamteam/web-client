import { ActionTypes, AuthAction } from '../actions'

export interface AuthState {
    isAuthenticating: boolean
    username?: string
}

const initialState: AuthState = {
    isAuthenticating: false
}

const authentication = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                isAuthenticating: true
            }
        case ActionTypes.LOGGEDIN:
            return {
                username: action.username,
                isAuthenticating: false
            }
        case ActionTypes.LOGGEDOUT:
            return initialState
        default:
            return state
    }
}

export default authentication