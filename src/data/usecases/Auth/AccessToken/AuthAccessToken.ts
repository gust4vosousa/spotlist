import axios from 'axios'

import {
  AuthAccessTokenNamespace,
  IAuthAuthAccessToken
} from '@/domain/usecases/Auth'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'

export class AuthAccessToken implements IAuthAuthAccessToken {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({
    authCode,
    codeVerifier
  }: AuthAccessTokenNamespace.IRequest) => {
    const url = `${this.httpClient.ACCOUNTS_URL}/api/token`

    const response = await axios.post<AuthAccessTokenNamespace.IResponse>(
      url,
      new URLSearchParams({
        client_id: this.httpClient.CLIENT_ID,
        code: authCode,
        code_verifier: codeVerifier,
        grant_type: 'authorization_code',
        redirect_uri: this.httpClient.REDIRECT_URI.local
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    localStorage.setItem('access_token', response.data.access_token)

    return response.data
  }
}
