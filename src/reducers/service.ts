import { ServiceActionTypes, ServiceAction } from '../actions/ServiceAction'
import { Service } from '../documents/Service'

import { CurrentUserState, initialState } from './currentUser'

// export interface ServicesState {
//     services: Service[]
// }

// const initialState: ServicesState = {
//     services: []
// }

const service = (state = initialState, action: ServiceAction): CurrentUserState => {
    switch (action.type) {
        case ServiceActionTypes.DELETE_SERVICE:
            console.log(state)
            return {
                currentUser: {
                    id: state.currentUser.id,
                    email: state.currentUser.email,
                    balance: state.currentUser.balance,
                    services: state.currentUser.services.filter(function(item){
                        return item.id != action.id
                    })
                }
            }
        case ServiceActionTypes.ADD_SERVICE:
            console.log(state)
            return {
                currentUser: {
                    id: state.currentUser.id,
                    email: state.currentUser.email,
                    balance: state.currentUser.balance,
                    services: action.services
                }
            }
        default:
            return state
    }
}

export default service