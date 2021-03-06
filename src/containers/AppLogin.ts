import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { login } from '../actions/loginAction'
import { AppState } from '../reducers'

import Login, { Props } from '../components/Login'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
        isAuthenticating: state.authentication.isAuthenticating,
        message: state.authentication.message
    } as Props
}

const mapDispatchToProps: MapDispatchToPropsFunction<{}, {}> = (dispatch) => {
    return {
        onLogin: (username: string, password: string) => {
            dispatch(login(username, password))
        }
    }
}

const AppLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default AppLogin