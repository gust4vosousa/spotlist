import { createSelector } from '@reduxjs/toolkit'
import { TRootState } from '../store.types'
import { ITracklistState } from './TracklistSlice.types'

export const selectTracklist = ({ tracklist }: TRootState): ITracklistState =>
  tracklist

export const selectTracklistData = (state: TRootState) =>
  createSelector([selectTracklist], ({ data }) => data)(state)
