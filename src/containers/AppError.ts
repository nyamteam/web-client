import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { ErrorState } from '../reducers/error'
import { AppState } from '../reducers'

import Error, { Props } from '../components/Error'

const mapStateToProps: MapStateToProps<Props, {}> = (state: AppState) => {
    return {
        errorMessage: state.error.errorMessage
    } as Props
}

const AppError = connect(
    mapStateToProps
)(Error)

export default AppError