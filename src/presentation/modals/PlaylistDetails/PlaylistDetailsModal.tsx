import React from 'react'

import { Grid, TextField } from '@mui/material'

import { translate } from '@/application/utils/Translate/TranslateUtil'
import { EIcons } from '@/presentation/components/Data/Icon/IconComponent.types'
import { IButtonProps } from '@/presentation/components/Input/Button/ButtonComponent.types'
import { CheckboxComponent } from '@/presentation/components/Input/Checkbox/CheckboxComponent'
import { Validator, useForm } from '@/presentation/hooks/UseForm/UseForm'
import { BaseModal } from '@/presentation/modals/Base/BaseModal'
import {
  IPlaylistDetailsModalProps,
  TPlaylistDetailsForm
} from '@/presentation/modals/PlaylistDetails/PlaylistDetailsModal.types'

export const PlaylistDetailsModal: React.FC<IPlaylistDetailsModalProps> = ({
  isBusy,
  isOpen,
  onClose,
  onSubmit
}) => {
  const {
    formState: { errors },
    formValues,
    handleSubmit,
    setValue
  } = useForm<TPlaylistDetailsForm>({
    defaultValues: {
      description: '',
      isPublic: false,
      name: ''
    },
    validationSchema: {
      description: Validator.string().notRequired(),
      isPublic: Validator.boolean().notRequired(),
      name: Validator.string().required()
    }
  })

  const actions: IButtonProps[] = [
    {
      children: 'Go back',
      color: 'error',
      disabled: isBusy,
      icon: EIcons.ARROW_BACK,
      onClick: () => onClose()
    },
    {
      children: 'Export',
      color: 'secondary',
      disabled: isBusy,
      icon: EIcons.EXPORT,
      inProgress: isBusy,
      onClick: handleSubmit(onSubmit)
    }
  ]

  return (
    <BaseModal
      actions={actions}
      isOpen={isOpen}
      onClose={onClose}
      title={translate.t('modals.playlist_details.title')}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={!!errors.name}
            fullWidth
            label='Name'
            onChange={({ target: { value } }) => setValue('name', value)}
            required
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errors.description}
            fullWidth
            label='Description'
            onChange={({ target: { value } }) => setValue('description', value)}
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxComponent
            isChecked={formValues.isPublic}
            label='Public playlist?'
            onChange={value => setValue('isPublic', value)}
          />
        </Grid>
      </Grid>
    </BaseModal>
  )
}
