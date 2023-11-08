import { createAsyncThunk } from '@reduxjs/toolkit'
import { EUserAuthActionTypes } from './UserAuthSlice.types'

export const getAuthCode = createAsyncThunk(
  EUserAuthActionTypes.getAuthCode,
  async () => {
    // const { handle } = new UserAuth()
    // try {
    //   const response = await handle()
    //   return response
    // } catch (error) {
    //   console.log(error)
    // }
  },
)
