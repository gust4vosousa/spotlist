import { IImage } from '../Image/ImageEntity.types'

export interface IArtist {
  id: string
  genres: string[]
  name: string
  images: IImage[]
}
