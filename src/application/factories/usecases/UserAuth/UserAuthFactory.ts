import { UserAuth } from '../../../../data/usecases/UserAuth/UserAuth'
import { makeHttpClientFactory } from '../../infra/HttpClient/HttpClientFactory'

export const makeUserAuthFactory = () => new UserAuth(makeHttpClientFactory())
