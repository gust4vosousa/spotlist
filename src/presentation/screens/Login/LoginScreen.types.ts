import { AccessToken } from '../../../data/usecases/AccessToken/AccessToken'
import { UserAuth } from '../../../data/usecases/UserAuth/UserAuth'

export interface ILoginScreenProps {
  accessTokenService: AccessToken
  userAuthService: UserAuth
}
