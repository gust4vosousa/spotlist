import React from 'react'

import { ICheckboxProps } from '@/presentation/components/Input/Checkbox/CheckboxComponent.types'
import { Checkbox, FormControlLabel } from '@mui/material'

export const CheckboxComponent: React.FC<ICheckboxProps> = ({
  isChecked,
  label,
  onChange
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={isChecked}
        onChange={(_event, value) => onChange(value)}
      />
    }
    label={label}
  />
)
