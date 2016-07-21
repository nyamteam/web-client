import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { ErrorState } from '../reducers/error'
import { AppState } from '../reducers'

import ServicesList, { Props } from '../components/ServicesList'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
        services: state.authentication.user.services
    } as Props
}

const UserServicesList = connect(
    mapStateToProps
)(ServicesList)

export default UserServicesList