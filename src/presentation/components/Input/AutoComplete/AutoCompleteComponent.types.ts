export interface IAutoCompleteProps<T> {
  isLoading: boolean
  label: string
  onChange: (value: T) => void
  onInputChange: (input: string) => void
  optionKey: keyof T
  options: T[]
  value: T | null
}
