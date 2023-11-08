import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ERequestStatus } from '../../../domain/application/RequestStatus/RequestStatus.types'
import { AccessTokenNamespace } from '../../../domain/usecases/AccessToken/AccessToken.types'
import { IAuthState } from './AuthSlice.types'

const initialState: IAuthState = { status: ERequestStatus.idle }

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
