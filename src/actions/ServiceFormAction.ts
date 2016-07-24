import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

import { ErrorActionTypes, throwErrror } from './errorAction'

import User from '../documents/User'
import Service from '../documents/Service'

export enum ServiceActionTypes {
    ADD_SERVICE,
    EDIT_SERVICE,
    DELETE_SERVICE
}

export interface ServiceAction extends Action {
    type: ServiceActionTypes
    id?: string
    title?: string
    description?: User
    price?: string
    user: User
}

export const addService = (user: User, title: string, description: string, price: number) => {
    return (dispatch: Dispatch<any>) => {
        fetch('//localhost:1337/user/'+ user.id +'/services', {
            method: 'POST',
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
            if(response.service)
            {
                //TODO
                //dispatch(push('/'))
            } else {
                //TODO
            }
        })
        .catch(function(err: any) {
            dispatch(throwErrror(__('Error : cannot connect to the server.')))
        })
    }
}