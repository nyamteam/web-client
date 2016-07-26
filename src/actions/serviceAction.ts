import { Action, Dispatch } from 'redux'
import { push } from 'react-router-redux'
import * as fetch from 'isomorphic-fetch'

import { ErrorActionTypes, throwErrror } from './errorAction'

import { Service } from '../documents/Service'

export enum ServiceActionTypes {
    DELETE_SERVICE,
}

export interface ServiceAction extends Action {
    type: ServiceActionTypes
    id?: string
}

const deletedService = (id: string) => {
    return {
        type: ServiceActionTypes.DELETE_SERVICE,
        id:id
    }
}

export const deleteService = (id: string) => {
    return (dispatch: Dispatch<any>) => {
        fetch('//localhost:1337/service/'+id, {
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