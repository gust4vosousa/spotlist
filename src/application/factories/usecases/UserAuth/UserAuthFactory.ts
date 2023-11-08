import { UserAuth } from '../../../../data/usecases/UserAuth/UserAuth'
import { makeHttpCLientFactory } from '../../infra/HttpClient/HttpClientFactory'

export const makeUserAuthFactory = () => new UserAuth(makeHttpCLientFactory())
