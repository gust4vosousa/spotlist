import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectAuthData } from '../../../application/store/Auth/AuthSelectors'
import { setAccessToken } from '../../../application/store/Auth/AuthSlice'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../application/store/store'
import { useAuthCode } from '../../hooks/AuthCode/UseAuthCode'
import { useHandleRequest } from '../../hooks/HandleRequest/UseHandleRequest'
import { ILoginScreenProps } from './LoginScreen.types'

export const useLoginScreenRules = ({
  accessTokenService,
  userAuthService,
}: ILoginScreenProps) => {
  const { handle: getUserAuth } = useHandleRequest(userAuthService.handle, null)

  const { data: accessToken, handle: getAccessToken } = useHandleRequest(
    accessTokenService.handle,
    null,
  )

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const selectUserAuth = useAppSelector(selectAuthData)

  const { authCode } = useAuthCode()

  useEffect(() => {
    if (authCode) {
      getAccessToken({ authCode })
    }
  }, [authCode])

  useEffect(() => {
    if (!!accessToken) {
      dispatch(setAccessToken(accessToken))
      navigate('/home')
    }
  }, [accessToken])

  return {
    accessToken: selectUserAuth?.access_token,
    authCode,
    getUserAuth,
  }
}
