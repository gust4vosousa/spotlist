import { AuthAccessToken } from '../../../../../data/usecases/Auth'
import { makeHttpClientFactory } from '../../../infra/HttpClient/HttpClientFactory'

export const makeAuthAccessTokenFactory = () =>
  new AuthAccessToken(makeHttpClientFactory())
