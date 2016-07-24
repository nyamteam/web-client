import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { serviceFormAction } from '../actions/serviceFormAction'
import { AppState } from '../reducers'

import ServiceForm, { Props } from '../components/ServiceForm'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
    } as Props
}

const mapDispatchToProps: MapDispatchToPropsFunction<{}, {}> = (dispatch) => {
    return {
        onLogin: (title: string, description: string, price: number) => {
            dispatch(addService(user, title, description, price))
        }
    }
}

const UserServiceForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceForm)

export default UserServiceForm