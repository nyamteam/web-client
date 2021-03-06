import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { logout } from '../actions/loginAction'
import { AppState } from '../reducers'

import Home, { Props } from '../components/Home'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
        user: state.currentUser.currentUser
    } as Props
}

const mapDispatchToProps: MapDispatchToPropsFunction<{}, {}> = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout())
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default App