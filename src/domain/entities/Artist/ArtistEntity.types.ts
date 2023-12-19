import { IImage } from '../Image/ImageEntity.types'

export interface IArtist {
  external_urls: {
    spotify: string
  }
  genres: string[]
  href: string
  id: string
  images: IImage[]
  name: string
  popularity: number
  type: string
  uri: string
}
