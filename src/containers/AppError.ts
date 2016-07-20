import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { ErrorState } from '../reducers/error'

import Error, { Props } from '../components/Error'

const mapStateToProps: MapStateToProps<Props, {}> = (state: ErrorState) => {
    return {
        errorMessage: state.errorMessage
    } as Props
}

const AppError = connect(
    mapStateToProps
)(Error)

export default AppError