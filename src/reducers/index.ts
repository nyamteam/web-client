import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authentication, { AuthState } from './authentication'
import error, { ErrorState } from './error'

export interface AppState {
    authentication: AuthState,
    error: ErrorState,
    routing: any
}

const rootReducer = combineReducers<AppState>({
    authentication,
    error,
    routing: routerReducer
})

export default rootReducer