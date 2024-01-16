import { PlaylistCreateNamespace } from '@/domain/usecases/Playlist'
import { IBaseModalProps } from '@/presentation/modals/Base/BaseModal.types'
export interface IPlaylistDetailsModalProps
  extends Omit<IBaseModalProps, 'actions'> {
  isBusy: boolean
  onSubmit: (details: TPlaylistDetailsForm) => void
}

export type TPlaylistDetailsForm = Omit<
  PlaylistCreateNamespace.IRequest,
  'userId'
>
