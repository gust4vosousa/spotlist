import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { tracklistReducer } from './Tracklist/TracklistSlice'
import { TAppDispatch, TRootState } from './store.types'

const reducer = combineReducers({
  tracklist: tracklistReducer,
})

export const store = configureStore({ reducer })

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
