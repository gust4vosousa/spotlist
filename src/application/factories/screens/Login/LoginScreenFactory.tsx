import { LoginScreen } from '../../../../presentation/screens/Login/LoginScreen'
import {
  makeAuthAccessTokenFactory,
  makeAuthCodeFactory,
} from '../../usecases/Auth'

export const makeLoginScreenFactory = () => (
  <LoginScreen
    authAccessTokenService={makeAuthAccessTokenFactory()}
    authCodeService={makeAuthCodeFactory()}
  />
)
