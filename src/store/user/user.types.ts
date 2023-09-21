import { IUser } from '../../shared/types/user.types'
import { atob } from 'node:buffer'

export interface IUserState {
  email: string
}

export interface IToken {
  token: string
}

export interface IUserInitialState {
  user: IUserState | null
  isLoading: boolean
  error: string | null
}

export interface InterfaceEmailPassword {
  email: string
  password: string
}

export interface IAuthResponse extends IToken {
  user: IUser
}
