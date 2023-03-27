import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface tokenState {
  value: boolean
}

// Define the initial state using that type
const initialState: tokenState = {
  value: false,
}

export const tokenSlice = createSlice({
  name: 'token',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state) => {
      state.value = true
    },
    logout: (state) => {
      state.value = false
    },
  },
})

export const login = tokenSlice.actions.login;
export const logout = tokenSlice.actions.logout;

// Other code such as selectors can use the imported `RootState` type

export default tokenSlice.reducer