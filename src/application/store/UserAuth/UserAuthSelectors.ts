import { createSelector } from '@reduxjs/toolkit'
import { TRootState } from '../store.types'
import { IUserAuthState } from './UserAuthSlice.types'

export const selectUserAuth = (state: TRootState): IUserAuthState =>
  state.userAuth

export const selectUserAuthData = (state: TRootState) =>
  createSelector([selectUserAuth], ({ data }) => data)(state)

export const selectUserAuthStatus = (state: TRootState) =>
  createSelector([selectUserAuth], ({ status }) => status)(state)
