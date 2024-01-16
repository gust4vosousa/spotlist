import { useCallback, useState } from 'react'

import { ERequestStatus } from '@/domain/application/RequestStatus/RequestStatus.types'
import { IUseHandleRequest } from '@/presentation/hooks/UseHandleRequest/UseHandleRequest.types'

export const useHandleRequest = <TOutput, TFilter = void>(
  service: TFilter extends void
    ? () => Promise<TOutput>
    : (filter: TFilter) => Promise<TOutput>,
  initialState: TOutput
): IUseHandleRequest<TOutput, TFilter> => {
  const [data, setData] = useState<TOutput>(initialState)
  const [status, setStatus] = useState<ERequestStatus>(ERequestStatus.idle)

  const isBusy = status === ERequestStatus.busy
  const isFailure = status === ERequestStatus.failure
  const isSuccess = status === ERequestStatus.success

  const handle = useCallback(
    async (filter: TFilter) => {
      setData(initialState)
      setStatus(ERequestStatus.busy)

      try {
        const response = await service(filter)

        setStatus(ERequestStatus.success)
        setData(response)

        return response
      } catch {
        setStatus(ERequestStatus.failure)

        return initialState
      }
    },
    [initialState, service]
  )

  const resetState = () => {
    setData(initialState)
    setStatus(ERequestStatus.idle)
  }

  return {
    data,
    handle,
    isBusy,
    isFailure,
    isSuccess,
    resetState
  }
}
