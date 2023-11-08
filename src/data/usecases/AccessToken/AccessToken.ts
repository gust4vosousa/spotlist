import axios from 'axios'
import { stringify } from 'qs'
import {
  AccessTokenNamespace,
  IAccessToken,
} from '../../../domain/usecases/AccessToken/AccessToken.types'
import { HttpClientConfig } from '../../../infra/HttpClient/HttpClientConfig'

export class AccessToken implements IAccessToken {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async (requestData: AccessTokenNamespace.IRequest) => {
    const codeVerifier = localStorage.getItem('codeVerifier')

    const data = stringify({ grant_type: 'client_credentials' })

    const response = await axios.post<AccessTokenNamespace.IResponse>(
      this.httpClient.TOKEN_URL,
      data,
      {
        headers: {
          Authorization: `Basic ${this.httpClient.AUTH_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    localStorage.setItem('accessToken', response.data.accessToken)

    return response.data
  }
}
