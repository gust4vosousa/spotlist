import { AccessToken } from '../../../../data/usecases/AccessToken/AccessToken'
import { makeHttpClientFactory } from '../../infra/HttpClient/HttpClientFactory'

export const makeAccessTokenFactory = () =>
  new AccessToken(makeHttpClientFactory())
