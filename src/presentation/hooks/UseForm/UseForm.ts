import { useCallback } from 'react'
import {
  Controller,
  UseFormRegisterReturn,
  useFieldArray,
  useForm as useFormLib
} from 'react-hook-form'
import * as Yup from 'yup'

import {
  IUseFormProps,
  TFieldValues
} from '@/presentation/hooks/UseForm/UseForm.types'
import { yupResolver } from '@hookform/resolvers/yup'

export { Yup as Validator, useFieldArray }

export const useForm = <T extends TFieldValues>({
  validationSchema,
  ...props
}: IUseFormProps<T>) => {
  const resolver = yupResolver(
    Yup.object().shape({
      ...validationSchema
    })
  )

  const {
    register,
    watch,
    handleSubmit,
    formState,
    getValues,
    setValue,
    clearErrors,
    control,
    reset,
    trigger
  } = useFormLib<T>({
    ...props,
    //@ts-ignore
    resolver
  })

  const changeRegisterRefName = useCallback(
    (
      { ref, ...rest }: UseFormRegisterReturn,
      newRefName: string
    ): Omit<UseFormRegisterReturn, 'ref'> => ({ ...rest, [newRefName]: ref }),
    []
  )

  const formValues = watch()

  return {
    changeRegisterRefName,
    clearErrors,
    control,
    Controller,
    formState,
    formValues,
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
    trigger
  }
}
