import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import { GeneralState } from '../reducers/general'

import Error, { Props } from '../components/Error'

const mapStateToProps: MapStateToProps<Props, {}> = (state: GeneralState) => {
    return {
        errorMessage: state.errorMessage
    } as Props
}

const AppError = connect(
    mapStateToProps
)(Error)

export default AppError