import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

import { ErrorActionTypes, throwErrror } from './errorAction'

import { Service } from '../documents/Service'
import { User } from '../documents/User'

export const ServiceActionTypes = {
    ADD_SERVICE: 'ADD_SERVICE',
    EDIT_SERVICE: 'EDIT_SERVICE',
    DELETE_SERVICE: 'DELETE_SERVICE'
}

const deletedService = (id: string) => {
    return {
        type: ServiceActionTypes.DELETE_SERVICE,
        id:id
    }
}

export const addedService = (services: Service[]) => {
    return {
        type: ServiceActionTypes.ADD_SERVICE,
        services: services
    }
}

export interface ServiceAction extends Action {
    type: string
    id?: string
    services?: Service[]
}

export const addService = (user: User, title: string, description: string, price: number) => {
    return (dispatch: Dispatch<any>) => {
        fetch('//localhost:1337/user/'+ user.id +'/services', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                title: title,
                description: description,
                price: price
            })
        })
        .then(function(response: any) {
            if (response.status >= 400) {
                dispatch(throwErrror(__('Bad response from server.')))
            }
            return response.json();
        })
        .then(function(response: any) {
            if(response.user)
            {
                console.log(response.user.services)
                dispatch(addedService(response.user.services))
                dispatch(push('/'))
            } else {
                //TODO
            }
        })
        .catch(function(err: any) {
            dispatch(throwErrror(__('Error : cannot connect to the server.')))
        })
    }
}

export const deleteService = (id: string) => {
    return (dispatch: Dispatch<any>) => {
        fetch('//localhost:1337/service/'+id, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(function(response:any) {
            if (response.status >= 400) {
                dispatch(throwErrror(__('Bad response from server.')))
            }
            dispatch(deletedService(id))
        })
        .catch(function(err:any) {
            dispatch(throwErrror(__('Error : cannot connect to the server.')))
        })
    }
}