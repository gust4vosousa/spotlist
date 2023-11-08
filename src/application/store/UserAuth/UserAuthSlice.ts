import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ERequestStatus } from '../../../domain/application/RequestStatus/RequestStatus.types'
import { AccessTokenNamespace } from '../../../domain/usecases/AccessToken/AccessToken.types'
import { IUserAuthState } from './UserAuthSlice.types'

const initialState: IUserAuthState = { status: ERequestStatus.idle }

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<AccessTokenNamespace.IResponse>,
    ) => {
      state.data = action.payload
    },
  },
})

export const { setAccessToken } = userAuthSlice.actions
export const userAuthReducer = userAuthSlice.reducer
