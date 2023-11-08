import { Icon } from '@mui/material'
import { IIconProps } from './IconComponent.types'

export const IconComponent: React.FC<IIconProps> = (props) => (
  <Icon {...props}>{props.icon}</Icon>
)
