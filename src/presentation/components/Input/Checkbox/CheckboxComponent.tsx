import React from 'react'

import { Checkbox, FormControlLabel } from '@mui/material'
import { ICheckboxProps } from './CheckboxComponent.types'

export const CheckboxComponent: React.FC<ICheckboxProps> = ({
  isChecked,
  label,
  onChange,
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
