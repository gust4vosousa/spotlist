import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { tracklistReducer } from '@/application/store/Tracklist/TracklistSlice'
import { TAppDispatch, TRootState } from '@/application/store/store.types'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  tracklist: tracklistReducer
})

export const store = configureStore({ reducer })

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
