import { AxiosRequestConfig } from 'axios'
import { EAuthScopes } from '../../domain/usecases/Auth'

export class HttpClientConfig {
  public readonly ACCOUNTS_URL = String(
    process.env.REACT_APP_SPOTIFY_ACCOUNTS_URL,
  )
  public readonly API_BASE_URL = String(
    process.env.REACT_APP_SPOTIFY_API_BASE_URL,
  )
  public readonly CLIENT_ID = String(process.env.REACT_APP_CLIENT_ID)

  public readonly REDIRECT_URI = {
    host: 'https://gust4vosousa.github.io/playlistify/',
    local: 'http://localhost:3000/callback',
  }

  public readonly SCOPES = [
    EAuthScopes.userReadPrivate,
    EAuthScopes.userReadEmail,
    EAuthScopes.playlistModifyPrivate,
    EAuthScopes.playlistModifyPublic,
  ].join(' ')

  public readonly getHeaders = (): AxiosRequestConfig['headers'] => ({
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  })
}
