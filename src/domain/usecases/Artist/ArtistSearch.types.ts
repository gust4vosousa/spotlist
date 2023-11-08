import { IArtist } from '../../entities/ArtistEntity.types'

export interface IArtistSearch {
  handle: (
    request: ArtistSearchNamespace.IRequest,
  ) => Promise<ArtistSearchNamespace.IResponse>
}

export namespace ArtistSearchNamespace {
  export interface IRequest {
    artistName: string
  }

  export interface IResponse {
    artists: IArtist[]
  }
}
