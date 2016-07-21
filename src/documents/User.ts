import Service from './Service'

export default class User {
    id: string
    email: string
    balance: number
    services: Service[]
}