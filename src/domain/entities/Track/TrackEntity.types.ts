import { IAlbum } from '../Album/AlbumEntity.types'
import { IArtist } from '../Artist/ArtistEntity.types'

export interface ITrack {
  id: string
  name: string
  artists: IArtist[]
  album: IAlbum
  uri: string
}
