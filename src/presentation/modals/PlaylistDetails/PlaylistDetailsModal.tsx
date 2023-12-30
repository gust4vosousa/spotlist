import React from 'react'

import { Grid, TextField } from '@mui/material'
import { translate } from '../../../application/utils/Translate/TranslateUtil'
import { EIcons } from '../../components/Data/Icon/IconComponent.types'
import { IButtonProps } from '../../components/Input/Button/ButtonComponent.types'
import { CheckboxComponent } from '../../components/Input/Checkbox/CheckboxComponent'
import { Validator, useForm } from '../../hooks/UseForm/UseForm'
import { BaseModal } from '../Base/BaseModal'
import {
  IPlaylistDetailsForm,
  IPlaylistDetailsModalProps,
} from './PlaylistDetailsModal.types'

export const PlaylistDetailsModal: React.FC<
  IPlaylistDetailsModalProps
> = props => {
  const {
    formState: { errors },
    formValues,
    handleSubmit,
    setValue,
  } = useForm<IPlaylistDetailsForm>({
    defaultValues: {
      description: '',
      isPublic: false,
      name: '',
    },
    validationSchema: {
      description: Validator.string().notRequired(),
      isPublic: Validator.boolean().notRequired(),
      name: Validator.string().required(),
    },
  })

  const actions: IButtonProps[] = [
    {
      children: 'Go back',
      color: 'error',
      icon: EIcons.ARROW_BACK,
      onClick: () => props.onClose(),
    },
    {
      children: 'Export',
      color: 'secondary',
      icon: EIcons.EXPORT,
      onClick: handleSubmit(props.onSubmit),
    },
  ]

  return (
    <BaseModal
      {...props}
      actions={actions}
      title={translate.t('modals.playlist_details.title')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={!!errors.name}
            fullWidth
            label="Name"
            onChange={({ target: { value } }) => setValue('name', value)}
            required
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errors.description}
            fullWidth
            label="Description"
            onChange={({ target: { value } }) => setValue('description', value)}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxComponent
            isChecked={formValues.isPublic}
            label="Public playlist?"
            onChange={value => setValue('isPublic', value)}
          />
        </Grid>
      </Grid>
    </BaseModal>
  )
}
