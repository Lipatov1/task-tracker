import { IAuthResponse, InterfaceEmailPassword } from './user.types'
import { AuthService } from '../../services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export const register = createAsyncThunk<
  IAuthResponse,
  InterfaceEmailPassword,
  { rejectValue: string | null }
>('auth/register', async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.register(email, password)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data as string
      return thunkAPI.rejectWithValue(message)
    }
    return thunkAPI.rejectWithValue(null)
  }
})

export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
})
