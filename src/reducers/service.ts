import { ServiceActionTypes, ServiceAction } from '../actions/ServiceAction'
import { Service } from '../documents/Service'

export interface ServicesState {
    services: Service[]
}

const initialState: ServicesState = {
    services: []
}

const service = (state = initialState, action: ServiceAction): ServicesState => {
    switch (action.type) {
        case ServiceActionTypes.DELETE_SERVICE:
            console.log(state)
            return {
                services: state.services.filter(function(item){
                    return item.id != action.id
                })
            }
        default:
            return state
    }
}

export default service