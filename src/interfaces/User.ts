import { IAddress } from './Address'

export interface IUser {
  id: string
  name: string
  email: string
  password: string
}

export type LoggedUserType = {
  name: string
  email: string
  userId: string
  addresses: IAddress[]
}
