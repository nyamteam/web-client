import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authentication, { AuthState } from './authentication'
import currentUser, { CurrentUserState } from './currentUser'
import service from './service'
import error, { ErrorState } from './error'

export interface AppState {
    authentication: AuthState,
    currentUser: CurrentUserState,
    error: ErrorState,
    routing: any
}

const rootReducer = combineReducers<AppState>({
    authentication,
    currentUser,
    service,
    error,
    routing: routerReducer
})

export default rootReducer