import { useState } from 'react'
import { EDebounceDelay } from './UseStateDebounce.types'

export const useStateDebounce = <TInitialValue>(
  initialValue: TInitialValue,
  timeout: EDebounceDelay = EDebounceDelay.default,
): [typeof initialValue, (value: TInitialValue) => void] => {
  const [value, setValue] = useState<typeof initialValue>(initialValue)

  let timer: ReturnType<typeof setTimeout>

  const setValueDebounce = (value: TInitialValue) => {
    clearTimeout(timer)

    timer = setTimeout(() => setValue(value), timeout)

    return
  }

  return [value, setValueDebounce]
}
