import { EIcons } from '@/presentation/components/Data/Icon/IconComponent.types'
import { ButtonProps } from '@mui/material'

export interface IButtonProps
  extends Omit<ButtonProps, 'endIcon' | 'startIcon'> {
  icon?: EIcons
  inProgress?: boolean
}
