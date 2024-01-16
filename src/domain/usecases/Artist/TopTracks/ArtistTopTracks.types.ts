import { ITrack, IUserDetails } from '@/domain/entities'

export interface IArtistTopTracks {
  handle: (
    request: ArtistTopTracksNamespace.IRequest
  ) => Promise<ArtistTopTracksNamespace.IResponse>
}

export namespace ArtistTopTracksNamespace {
  export interface IRequest {
    artistId: string
    country: IUserDetails['country']
  }

  export interface IResponse {
    tracks: ITrack[]
  }
}
