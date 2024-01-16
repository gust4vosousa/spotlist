import { makeHttpClientFactory } from '@/application/factories/infra/HttpClient/HttpClientFactory'
import { AuthCode } from '@/data/usecases/Auth'

export const makeAuthCodeFactory = () => new AuthCode(makeHttpClientFactory())
