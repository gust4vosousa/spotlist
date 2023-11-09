import { IImage } from '../Image/ImageEntity.types'

export interface IAlbum {
  id: string
  name: string
  images: IImage[]
}
