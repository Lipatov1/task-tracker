import { getStoreLocal } from '@/utils/local-storage/localStorage'
import { login, logout, register } from './user.actions'
import { IUserInitialState } from './user.types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserInitialState = {
  user: getStoreLocal('user'),
  isLoading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.payload ?? null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.payload ?? null
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
      })
  },
})

export default userSlice.reducer
