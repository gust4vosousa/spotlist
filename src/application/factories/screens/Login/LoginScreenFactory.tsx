import React from 'react'

import {
  makeAuthAccessTokenFactory,
  makeAuthCodeFactory
} from '@/application/factories/usecases/Auth'
import { LoginScreen } from '@/presentation/screens/Login/LoginScreen'

export const makeLoginScreenFactory = (): React.ReactElement => (
  <LoginScreen
    authAccessTokenService={makeAuthAccessTokenFactory()}
    authCodeService={makeAuthCodeFactory()}
  />
)
