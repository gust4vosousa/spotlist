import { ERequestStatus } from '../../../domain/application/RequestStatus/RequestStatus.types'

export interface IHandleRequestDefault {
  isBusy: boolean
  isFailure: boolean
  resetState: () => void
  state: ERequestStatus
}

export interface IUseHandleRequest<TOutput, TFilter = void>
  extends IHandleRequestDefault {
  data: TOutput
  handle: (filter: TFilter) => Promise<TOutput>
}
