import { useCallback, useState } from 'react'
import { ERequestStatus } from '../../../domain/application/RequestStatus/RequestStatus.types'
import { IUseHandleRequest } from './UseHandleRequest.types'

export const useHandleRequest = <TOutput, TFilter = void>(
  service: TFilter extends void
    ? () => Promise<TOutput>
    : (filter: TFilter) => Promise<TOutput>,
  initialState: TOutput,
): IUseHandleRequest<TOutput, TFilter> => {
  const [data, setData] = useState<TOutput>(initialState)
  const [state, setState] = useState<ERequestStatus>(ERequestStatus.idle)

  const isBusy = state === ERequestStatus.busy
  const isFailure = state === ERequestStatus.failure

  const handle = useCallback(
    async (filter: TFilter) => {
      setData(initialState)
      setState(ERequestStatus.busy)

      try {
        const response = await service(filter)

        setState(ERequestStatus.success)
        setData(response)

        return response
      } catch {
        setState(ERequestStatus.failure)

        return initialState
      }
    },
    [initialState, service],
  )

  const resetState = () => {
    setData(initialState)
    setState(ERequestStatus.idle)
  }

  return {
    data,
    handle,
    isBusy,
    isFailure,
    resetState,
    state,
  }
}
