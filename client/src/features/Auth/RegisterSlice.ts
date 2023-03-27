import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface verifyState {
  name:string,
  email:string,
  password:string,
  otp:number
}

// Define the initial state using that type
const initialState: verifyState = {
  name:'',
  email:'',
  password:'',
  otp:0
}

export const registerSlice = createSlice({
  name: 'verify',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
})

// export const login = tokenSlice.actions.login;
// export const logout = tokenSlice.actions.logout;

// Other code such as selectors can use the imported `RootState` type

export default registerSlice.reducer