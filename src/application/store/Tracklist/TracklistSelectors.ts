import { ITracklistState } from '@/application/store/Tracklist/TracklistSlice.types'
import { TRootState } from '@/application/store/store.types'
import { createSelector } from '@reduxjs/toolkit'

export const selectTracklistState = ({
  tracklist
}: TRootState): ITracklistState => tracklist

export const selectTracklistData = (state: TRootState) =>
  createSelector(
    [selectTracklistState],
    ({ tracklist }) => tracklist.data
  )(state)

export const selectTracklistError = (state: TRootState) =>
  createSelector(
    [selectTracklistState],
    ({ tracklist }) => tracklist.error
  )(state)

export const selectTracklistUrl = (state: TRootState) =>
  createSelector(
    [selectTracklistState],
    ({ tracklist }) => tracklist.url
  )(state)
