import { ReactNode } from 'react'

export interface ISelectProps {
  fullWidth?: boolean
  getOptionLabel?: (value: string) => string
  helperText?: ReactNode
  isError?: boolean
  label?: string
  onChange: (value: string) => void
  options: string[]
  value: string
}

export interface ISelectOption {
  label: string
  value: string | number
}
