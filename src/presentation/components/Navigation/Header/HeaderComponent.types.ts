import { EIcons } from '../../Data/Icon/IconComponent.types'

export interface IHeaderAction {
  icon: EIcons
  onClick: () => void
  title?: string
  visible: boolean
}
