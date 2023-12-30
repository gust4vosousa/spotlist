import { createSelector } from '@reduxjs/toolkit'
import { TRootState } from '../store.types'
import { ITracklistState } from './TracklistSlice.types'

export const selectTracklistState = ({
  tracklist,
}: TRootState): ITracklistState => tracklist

export const selectRecommendations = (state: TRootState) =>
  createSelector(
    [selectTracklistState],
    ({ recommendations }) => recommendations,
  )(state)

export const selectTopTracks = (state: TRootState) =>
  createSelector([selectTracklistState], ({ topTracks }) => topTracks)(state)

export const selectTracklist = (state: TRootState) =>
  createSelector([selectTracklistState], ({ tracklist }) => tracklist)(state)
