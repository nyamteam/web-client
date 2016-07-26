import { User } from './User'

export interface Service {
    id: string
    title: string
    description: string
    price: number
    owner: User
}