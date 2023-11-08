import { AccessToken } from '../../../../data/usecases/AccessToken/AccessToken'
import { makeHttpCLientFactory } from '../../infra/HttpClient/HttpClientFactory'

export const makeAccessTokenFactory = () =>
  new AccessToken(makeHttpCLientFactory())
