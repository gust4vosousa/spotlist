import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { tracklistReducer } from './Tracklist/TracklistSlice'
import { userReducer } from './User/UserSlice'
import { TAppDispatch, TRootState } from './store.types'

const reducer = combineReducers({
  tracklist: tracklistReducer,
  user: userReducer,
})

export const store = configureStore({ reducer })

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
