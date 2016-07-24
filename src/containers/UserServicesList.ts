import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import { push } from 'react-router-redux'

import { ErrorState } from '../reducers/error'
import { AppState } from '../reducers'

import ServicesList, { Props } from '../components/ServicesList'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
        services: state.authentication.user.services
    } as Props
}

const mapDispatchToProps: MapDispatchToPropsFunction<{}, {}> = (dispatch) => {
    return {
        onClickAdd: () => {
            dispatch(push('/addService'))
        }
    }
}
            

const UserServicesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServicesList)

export default UserServicesList