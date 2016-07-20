import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, useRouterHistory, EnterHook } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import * as injectTapEventPlugin from 'react-tap-event-plugin'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import * as config from 'config'
import rootReducer, { AppState } from './reducers'
import App from './containers/App'
import AppLogin from './containers/AppLogin'
import AppError from './containers/AppError'

const browserHistory = useRouterHistory(createHistory)({
    basename: config.basePath
})
const historyMiddleware = routerMiddleware(browserHistory)
const store = createStore<AppState>(
    rootReducer,
    applyMiddleware(historyMiddleware, thunk)
)
const history = syncHistoryWithStore(browserHistory, store)

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const requireAuth: EnterHook = (nextState, replace) => {
    if (!store.getState().authentication.username) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
            <Router history={history}>
                <Route path='/' component={App} onEnter={requireAuth} />
                <Route path='/login' component={AppLogin} />
                <Route path='/error' component={AppError} />
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)