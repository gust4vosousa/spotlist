import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUserDetails } from '../../../domain/entities'
import { IUserState } from './UserSlice.types'

const initialState: IUserState = { data: null }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: state => {
      state.data = null
    },
    setUser: (state, action: PayloadAction<IUserDetails>) => {
      state.data = action.payload
    },
  },
})

export const { resetUser, setUser } = userSlice.actions
export const userReducer = userSlice.reducer
