import { ErrorActionTypes, ErrorAction } from '../actions/errorAction'

export interface ErrorState {
    errorMessage?: string
}

const initialState: ErrorState = {
    errorMessage: null
}

const Error = (state = initialState, action: ErrorAction): ErrorState => {
    switch (action.type) {
        case ErrorActionTypes.THROWERROR:
            return {
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export default Error