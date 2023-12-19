import { AuthCode } from '../../../../../data/usecases/Auth'
import { makeHttpClientFactory } from '../../../infra/HttpClient/HttpClientFactory'

export const makeAuthCodeFactory = () => new AuthCode(makeHttpClientFactory())
