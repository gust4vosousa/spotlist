import { createSelector } from '@reduxjs/toolkit'
import { TRootState } from '../store.types'
import { IAuthState } from './AuthSlice.types'

export const selectAuth = (state: TRootState): IAuthState => state.userAuth

export const selectAuthData = (state: TRootState) =>
  createSelector([selectAuth], ({ data }) => data)(state)

export const selectAuthStatus = (state: TRootState) =>
  createSelector([selectAuth], ({ status }) => status)(state)
