import { IAlbum } from '../Album/AlbumEntity.types'
import { IArtist } from '../Artist/ArtistEntity.types'

export interface ITrack {
  album: IAlbum
  artists: IArtist[]
  duration_ms: number
  explicit: boolean
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_playable: boolean
  name: string
  track_number: number
  type: string
  uri: string
}
