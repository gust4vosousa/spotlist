import { getCodeUtil } from '@/application/utils/CodeVerifier/CodeVerifierUtil'
import { IAuthCode } from '@/domain/usecases/Auth'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'

export class AuthCode implements IAuthCode {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async () => {
    const { codeChallenge, codeVerifier } = await getCodeUtil()
    const url = new URL(`${this.httpClient.ACCOUNTS_URL}/authorize`)

    const params = {
      client_id: this.httpClient.CLIENT_ID,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      redirect_uri: this.httpClient.REDIRECT_URI.local,
      response_type: 'code',
      scope: this.httpClient.SCOPES
    }

    window.localStorage.setItem('code_verifier', codeVerifier)

    url.search = new URLSearchParams(params).toString()
    window.location.href = url.toString()
  }
}
