import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectUserAuthData } from '../../../application/store/UserAuth/UserAuthSelectors'
import { setAccessToken } from '../../../application/store/UserAuth/UserAuthSlice'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../application/store/store'
import { useAuthCodeHook } from '../../hooks/AuthCode/UseAuthCodeHook'
import { useHandleRequestHook } from '../../hooks/HandleRequest/UseHandleRequestHook'
import { ILoginScreenProps } from './LoginScreen.types'

export const useLoginScreenRules = ({
  accessTokenService,
  userAuthService,
}: ILoginScreenProps) => {
  const { handle: getUserAuth } = useHandleRequestHook(
    userAuthService.handle,
    null,
  )

  const { data: accessToken, handle: getAccessToken } = useHandleRequestHook(
    accessTokenService.handle,
    null,
  )

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const selectUserAuth = useAppSelector(selectUserAuthData)

  const { authCode } = useAuthCodeHook()

  useEffect(() => {
    if (authCode) {
      getAccessToken({ authCode })
    }
  }, [])

  useEffect(() => {
    if (!!accessToken) {
      dispatch(setAccessToken(accessToken))
      // navigate('/home')
    }
  }, [])

  return {
    accessToken: selectUserAuth?.accessToken,
    authCode,
    getUserAuth,
  }
}