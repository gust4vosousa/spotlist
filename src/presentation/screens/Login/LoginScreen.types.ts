import { AuthAccessToken, AuthCode } from '@/data/usecases/Auth'

export interface ILoginScreenProps {
  authAccessTokenService: AuthAccessToken
  authCodeService: AuthCode
}
