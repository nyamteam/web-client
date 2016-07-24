import { Dispatch } from 'redux'
import { connect, MapStateToProps, MapDispatchToPropsFunction, MergeProps } from 'react-redux'

import * as serviceFormAction from '../actions/serviceFormAction'
import { AppState } from '../reducers'

import ServiceForm, { Props } from '../components/ServiceForm'

const mapStateToProps: MapStateToProps<any, {}> = (state: AppState) => {
    return state
}

const mergeProps: MergeProps<{}, {}, Props>  = (stateProps: AppState, dispatchProps: any, ownProps: Props) => {
    return {
        onAddService: (title: string, description: string, price: number) => {
            dispatchProps.addService(stateProps.authentication.user, title, description, price)
        }
    }
}

const UserServiceForm = connect(
    mapStateToProps,
    serviceFormAction as any,
    mergeProps
)(ServiceForm)

export default UserServiceForm