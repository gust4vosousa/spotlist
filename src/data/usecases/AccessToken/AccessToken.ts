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
    const response = await axios.post<AccessTokenNamespace.IResponse>(
      this.httpClient.TOKEN_URL,
      stringify({ grant_type: 'client_credentials' }),
      {
        headers: {
          Authorization: `Basic ${this.httpClient.AUTH_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    localStorage.setItem('access_token', response.data.access_token)

    return response.data
  }
}
