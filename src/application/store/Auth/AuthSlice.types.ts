import { ERequestStatus } from '../../../domain/application/RequestStatus/RequestStatus.types'
import { AccessTokenNamespace } from '../../../domain/usecases/AccessToken/AccessToken.types'

export interface IAuthState {
  data?: AccessTokenNamespace.IResponse
  status: ERequestStatus
}