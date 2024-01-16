export interface IHandleRequestDefault {
  isBusy: boolean
  isFailure: boolean
  isSuccess: boolean
  resetState: () => void
}

export interface IUseHandleRequest<TOutput, TFilter = void>
  extends IHandleRequestDefault {
  data: TOutput
  handle: (filter: TFilter) => Promise<TOutput>
}
