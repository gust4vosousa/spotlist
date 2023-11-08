import { LoginScreen } from '../../../../presentation/screens/Login/LoginScreen'
import { makeAccessTokenFactory } from '../../usecases/AccessToken/AccessTokenFactory'
import { makeUserAuthFactory } from '../../usecases/UserAuth/UserAuthFactory'

export const makeLoginScreenFactory = () => (
  <LoginScreen
    accessTokenService={makeAccessTokenFactory()}
    userAuthService={makeUserAuthFactory()}
  />
)
