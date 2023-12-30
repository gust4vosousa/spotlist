import {
  FormState,
  DeepMap as TDeepMap,
  DefaultValues as TDefaultValues,
  FieldError as TFieldError,
  FieldValues as TFieldValues,
  UseFormProps as TUseFormProps,
  UseFormSetValue as TUseFormSetValue,
  UseFormWatch as TUseFormWatch,
} from 'react-hook-form'

import * as Yup from 'yup'

export type TUseFormFieldError = TFieldError

export type TFormState<T extends TFieldValues> = FormState<T>

export interface IValidatorSchema<T> {
  validationSchema?: Record<keyof T, Yup.AnySchema>
}

export interface IUseFormProps<T extends TFieldValues>
  extends Omit<TUseFormProps, 'resolver'>,
    IValidatorSchema<T> {
  defaultValues?: TDefaultValues<T>
}

export type {
  TDeepMap,
  TFieldError,
  TFieldValues,
  TUseFormSetValue,
  TUseFormWatch,
}
