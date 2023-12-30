import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITrack } from '../../../domain/entities'
import { ITracklistState } from './TracklistSlice.types'

const initialState: ITracklistState = {
  recommendations: [],
  topTracks: [],
  tracklist: [],
}

const { actions, reducer } = createSlice({
  name: 'tracklist',
  initialState,
  reducers: {
    resetTracklist: state => {
      state = initialState
    },
    setRecommendations: (state, { payload }: PayloadAction<ITrack[]>) => {
      state.recommendations = payload
    },
    setTopTracks: (state, { payload }: PayloadAction<ITrack[]>) => {
      state.topTracks = payload
    },
    setTracklist: (state, { payload }: PayloadAction<ITrack[]>) => {
      state.tracklist = payload
    },
  },
})

export const tracklistReducer = reducer

export const {
  resetTracklist,
  setRecommendations,
  setTopTracks,
  setTracklist,
} = actions
