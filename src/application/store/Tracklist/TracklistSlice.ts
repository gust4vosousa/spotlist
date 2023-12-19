import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITrack } from '../../../domain/entities'
import { ITracklistState } from './TracklistSlice.types'

const initialState: ITracklistState = { data: null }

const tracklistSlice = createSlice({
  name: 'tracklist',
  initialState,
  reducers: {
    resetTracklist: state => {
      state.data = null
    },
    setTracklist: (state, action: PayloadAction<ITrack[]>) => {
      state.data = action.payload
    },
  },
})

export const { resetTracklist, setTracklist } = tracklistSlice.actions
export const tracklistReducer = tracklistSlice.reducer
