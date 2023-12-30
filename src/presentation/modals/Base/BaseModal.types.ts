import { DialogProps } from '@mui/material'
import { IButtonProps } from '../../components/Input/Button/ButtonComponent.types'

export interface IBaseModalProps
  extends Omit<DialogProps, 'onSubmit' | 'open'> {
  actions?: IButtonProps[]
  isOpen: boolean
  onClose: () => void
}
