import { IBaseModalProps } from '../Base/BaseModal.types'

export interface IPlaylistDetailsModalProps
  extends Omit<IBaseModalProps, 'actions'> {
  onSubmit: (details: IPlaylistDetailsForm) => void
}

export interface IPlaylistDetailsForm {
  description?: string
  isPublic: boolean
  name: string
}
