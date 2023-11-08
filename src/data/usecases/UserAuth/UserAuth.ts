import { getCodeUtil } from '../../../application/utils/CodeVerifier/CodeVerifierUtil'
import { IUserAuth } from '../../../domain/usecases/UserAuth/UserAuth.types'
import { HttpClientConfig } from '../../../infra/HttpClient/HttpClientConfig'

export class UserAuth implements IUserAuth {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async () => {
    const { codeChallenge, codeVerifier } = await getCodeUtil()

    const url = new URL(this.httpClient.AUTH_URL)

    window.localStorage.setItem('codeVerifier', codeVerifier)

    const params = {
      client_id: this.httpClient.CLIENT_ID,
      code_challenge: codeChallenge,
      code_challenge_method: this.httpClient.CHALLENGE_METHOD,
      redirect_uri: this.httpClient.REDIRECT_URI.local,
      response_type: this.httpClient.RESPONSE_TYPE,
      scope: this.httpClient.SCOPES.toString(),
    }

    url.search = new URLSearchParams(params).toString()
    window.location.href = url.toString()
  }
}
