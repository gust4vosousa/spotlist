import { IArtist } from '@/domain/entities/Artist/ArtistEntity.types'

export interface IArtistSearch {
  handle: (
    request: ArtistSearchNamespace.IRequest
  ) => Promise<ArtistSearchNamespace.IResponse>
}

export namespace ArtistSearchNamespace {
  export interface IRequest {
    artistName: string
  }

  export interface IResponse {
    artists: {
      items: IArtist[]
    }
  }
}
