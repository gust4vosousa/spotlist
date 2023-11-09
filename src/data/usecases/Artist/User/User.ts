import axios from 'axios'
import {
  IUser,
  UserNamespace,
} from '../../../../domain/usecases/User/User.types'
import { HttpClientConfig } from '../../../../infra/HttpClient/HttpClientConfig'

export class User implements IUser {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async () => {
    const url = `${this.httpClient.API_BASE_URL}/v1/me`

    const response = await axios.get<UserNamespace.TResponse>(url, {
      headers: this.httpClient.headers,
    })

    return response.data
  }
}
