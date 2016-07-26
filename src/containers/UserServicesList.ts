import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import { push } from 'react-router-redux'

import { deleteService } from '../actions/serviceAction'
import { AppState } from '../reducers'

import ServicesList, { Props } from '../components/ServicesList'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
        services: state.currentUser.currentUser? state.currentUser.currentUser.services:[]
    } as Props
}

const mapDispatchToProps: MapDispatchToPropsFunction<{}, {}> = (dispatch) => {
    return {
        onClickAdd: () => {
            dispatch(push('/addService'))
        },
        onDelete: (id: string) => {
            dispatch(deleteService(id))
        }
    }
}

const UserServicesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServicesList)

export default UserServicesList