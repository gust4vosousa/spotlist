import { ERequestStatus } from '../../../domain/application/RequestStatus/RequestStatus.types'
import { AccessTokenNamespace } from '../../../domain/usecases/AccessToken/AccessToken.types'

export interface IUserAuthState {
  data?: AccessTokenNamespace.IResponse
  status: ERequestStatus
}

export enum EUserAuthActionTypes {
  getAuthCode = '@userAuth/getAuthCode',
}
