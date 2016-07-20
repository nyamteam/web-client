import { ActionTypes, GeneralAction } from '../actions'

export interface GeneralState {
    errorMessage?: string
}

const initialState: GeneralState = {
    errorMessage: null
}

const general = (state = initialState, action: GeneralAction): GeneralState => {
    switch (action.type) {
        case ActionTypes.THROWERROR:
            return {
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export default general