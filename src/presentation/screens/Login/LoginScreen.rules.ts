import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUserContext } from '../../../application/contexts/User/UserContext'
import { useAuthCode } from '../../hooks/UseAuthCode/UseAuthCode'
import { useHandleRequest } from '../../hooks/UseHandleRequest/UseHandleRequest'
import { ILoginScreenProps } from './LoginScreen.types'

export const useLoginScreenRules = ({
  authAccessTokenService,
  authCodeService,
}: ILoginScreenProps) => {
  const { handle: getAuthCode } = useHandleRequest(authCodeService.handle, null)

  const {
    data: authAccessToken,
    handle: getAuthAccessToken,
    isBusy: isAuthAccessTokenBusy,
  } = useHandleRequest(authAccessTokenService.handle, null)

  const navigate = useNavigate()

  const { authCode, codeVerifier } = useAuthCode()
  const { setIsUserAuthenticated } = useUserContext()

  useEffect(() => {
    if (!!authCode && !!codeVerifier) {
      getAuthAccessToken({ authCode, codeVerifier })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (authAccessToken) {
      setIsUserAuthenticated(true)
      navigate('/home')
    }
  }, [authAccessToken, navigate, setIsUserAuthenticated])

  return {
    getAuthCode,
    isAuthAccessTokenBusy,
  }
}
