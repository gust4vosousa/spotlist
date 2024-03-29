import { IUser, UserNamespace } from '@/domain/usecases/User/User.types'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'
import axios from 'axios'

export class User implements IUser {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async () => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/me`

    const response = await axios.get<UserNamespace.TResponse>(url, {
      headers
    })

    return response.data
  }
}
