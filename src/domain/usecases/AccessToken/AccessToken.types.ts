export interface IAccessToken {
  handle: (
    requestData: AccessTokenNamespace.IRequest,
  ) => Promise<AccessTokenNamespace.IResponse | undefined>
}

export namespace AccessTokenNamespace {
  export interface IRequest {
    authCode: string
  }

  export interface IResponse {
    access_token: string
  }
}
