import { makeHttpClientFactory } from '@/application/factories/infra/HttpClient/HttpClientFactory'
import { AuthAccessToken } from '@/data/usecases/Auth'

export const makeAuthAccessTokenFactory = () =>
  new AuthAccessToken(makeHttpClientFactory())
