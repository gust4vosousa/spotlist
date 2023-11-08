import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'
import { TFormFieldProps } from './FormFieldComponent.types'

export const FormFieldComponent: React.FC<TFormFieldProps> = props => {
  const [field] = useField(String(props.name))

  return <TextField {...props} {...field} variant="outlined" />
}
