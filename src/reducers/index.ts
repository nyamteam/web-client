import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authentication, { AuthState } from './authentication'
import general, { GeneralState } from './general'

export interface AppState {
    authentication: AuthState,
    general: GeneralState,
    routing: any
}

const rootReducer = combineReducers<AppState>({
    authentication,
    general,
    routing: routerReducer
})

export default rootReducer