import React from 'react'

import { ISelectProps } from '@/presentation/components/Input/Select/SelectComponent.types'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'

export const SelectComponent: React.FC<ISelectProps> = ({
  fullWidth,
  getOptionLabel,
  helperText,
  isError,
  label,
  onChange,
  options,
  value
}) => (
  <FormControl fullWidth={fullWidth} error={isError}>
    <InputLabel>{label}</InputLabel>

    <Select
      onChange={({ target }) => onChange(target.value)}
      label={label}
      style={{ borderRadius: '32px' }}
      value={value}
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {getOptionLabel ? getOptionLabel(option) : option}
        </MenuItem>
      ))}
    </Select>

    <FormHelperText error={isError}>{helperText}</FormHelperText>
  </FormControl>
)
