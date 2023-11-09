import { User } from '../../../../data/usecases/Artist/User/User'
import { makeHttpClientFactory } from '../../infra/HttpClient/HttpClientFactory'

export const makeUserFactory = () => new User(makeHttpClientFactory())
