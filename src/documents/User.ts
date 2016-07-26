import { Service } from './Service'

export interface User {
    id: string
    email: string
    balance: number
    services: Service[]
}