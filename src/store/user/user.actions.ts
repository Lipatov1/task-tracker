import { IAuthResponse, InterfaceEmailPassword } from './user.types'
import { AuthService } from '../../services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const register = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

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
