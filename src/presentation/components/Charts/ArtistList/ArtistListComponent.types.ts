import { IArtist } from '../../../../domain/entities'

export interface IArtistListProps {
  artists: IArtist[]
  onDelete: (artist: IArtist) => void
}
