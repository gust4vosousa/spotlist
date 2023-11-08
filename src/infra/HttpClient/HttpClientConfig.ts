import { Buffer } from 'buffer'
import { EAuthScopes } from '../../domain/usecases/UserAuth/UserAuth.types'

export class HttpClientConfig {
  ACCESS_TOKEN = localStorage.getItem('access_token')
  API_BASE_URL = String(process.env.REACT_APP_SPOTIFY_API_BASE_URL)
  AUTH_URL = new URL('https://accounts.spotify.com/authorize')
  CHALLENGE_METHOD = 'S256'
  CLIENT_ID = String(process.env.REACT_APP_CLIENT_ID)
  CLIENT_SECRET = String(process.env.REACT_APP_CLIENT_SECRET)
  GRANT_TYPE = 'client_credentials'
  RESPONSE_TYPE = 'code'
  TOKEN_URL = `${process.env.REACT_APP_SPOTIFY_ACCOUNTS_URL}/api/token`
  AUTH_TOKEN = Buffer.from(
    `${this.CLIENT_ID}:${this.CLIENT_SECRET}`,
    'utf-8',
  ).toString('base64')

  REDIRECT_URI = {
    host: 'https://gust4vosousa.github.io/playlistify/',
    local: 'http://localhost:3000/callback',
  }

  SCOPES: EAuthScopes[] = [
    EAuthScopes.userReadPrivate,
    EAuthScopes.userReadEmail,
    EAuthScopes.playlistModifyPrivate,
    EAuthScopes.playlistModifyPublic,
  ]

  headers = {
    Authorization: `Bearer ${this.ACCESS_TOKEN}`,
  }
}
