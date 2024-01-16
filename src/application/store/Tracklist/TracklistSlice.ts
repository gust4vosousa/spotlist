import { ITracklistState } from '@/application/store/Tracklist/TracklistSlice.types'
import { ITrack } from '@/domain/entities'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ITracklistState = {
  tracklist: {
    data: [],
    error: '',
    url: ''
  }
}

const { actions, reducer } = createSlice({
  name: 'tracklist',
  initialState,
  reducers: {
    clearTracklistState: state => {
      state.tracklist = initialState.tracklist
    },
    setTracklistData: (state, { payload }: PayloadAction<ITrack[]>) => {
      state.tracklist.data = payload
    },
    setTracklistError: (state, { payload }: PayloadAction<string>) => {
      state.tracklist.error = payload
    },
    setTracklistUrl: (state, { payload }: PayloadAction<string>) => {
      state.tracklist.url = payload
    }
  }
})

export const tracklistReducer = reducer

export const {
  clearTracklistState,
  setTracklistData,
  setTracklistError,
  setTracklistUrl
} = actions
