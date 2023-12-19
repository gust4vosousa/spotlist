export interface IAuthAuthAccessToken {
  handle: (
    requestData: AuthAccessTokenNamespace.IRequest,
  ) => Promise<AuthAccessTokenNamespace.IResponse | undefined>
}

export namespace AuthAccessTokenNamespace {
  export interface IRequest {
    authCode: string
    codeVerifier: string
  }

  export interface IResponse {
    access_token: string
    expires_in: number
    token_type: string
  }
}
