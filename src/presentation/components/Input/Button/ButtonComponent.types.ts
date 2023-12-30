import { ButtonProps } from '@mui/material'
import { EIcons } from '../../Data/Icon/IconComponent.types'

export interface IButtonProps
  extends Omit<ButtonProps, 'endIcon' | 'startIcon'> {
  icon?: EIcons
  inProgress?: boolean
}
