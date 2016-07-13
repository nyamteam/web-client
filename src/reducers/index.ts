import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authentication, { AuthState } from './authentication'

export interface AppState {
    authentication: AuthState,
    routing: any
}

const rootReducer = combineReducers<AppState>({
    authentication,
    routing: routerReducer
})

export default rootReducer