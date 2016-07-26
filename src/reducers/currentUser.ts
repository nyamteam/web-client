import { CurrentUserActionTypes, CurrentUserAction } from '../actions/currentUserAction'
import { User } from '../documents/User'
import { Service } from '../documents/Service'

export interface  CurrentUserState {
    currentUser: User
}

export const initialState: CurrentUserState = {
    currentUser: null
}

const currentUserState = (state = initialState, action: CurrentUserAction): CurrentUserState => {
    switch (action.type) {
        case CurrentUserActionTypes.INIT_CURRENT_USER:
            return {
                currentUser: action.user
            }        
        default:
            return state
    }
}

export default currentUserState