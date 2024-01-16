import { EIcons } from '@/presentation/components/Data/Icon/IconComponent.types'

export interface IHeaderAction {
  icon: EIcons
  onClick: () => void
  title?: string
  visible: boolean
}
