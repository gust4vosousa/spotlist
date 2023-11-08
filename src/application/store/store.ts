import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { userAuthReducer } from './UserAuth/UserAuthSlice'
import { TAppDispatch, TRootState } from './store.types'

const reducer = combineReducers({
  userAuth: userAuthReducer,
})

export const store = configureStore({ reducer })

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
