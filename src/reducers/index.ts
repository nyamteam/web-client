import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authentication, { AuthState } from './authentication'
import general, { ErrorState } from './error'

export interface AppState {
    authentication: AuthState,
    general: ErrorState,
    routing: any
}

const rootReducer = combineReducers<AppState>({
    authentication,
    general,
    routing: routerReducer
})

export default rootReducer