import { createSelector } from '@reduxjs/toolkit'
import { TRootState } from '../store.types'
import { IUserState } from './UserSlice.types'

export const selectUser = ({ user }: TRootState): IUserState => user

export const selectUserData = (state: TRootState) =>
  createSelector([selectUser], ({ data }) => data)(state)
