import { ITrack } from '../../../entities'

export interface IArtistTopTracks {
  handle: (
    request: ArtistTopTracksNamespace.IRequest,
  ) => Promise<ArtistTopTracksNamespace.IResponse>
}

export namespace ArtistTopTracksNamespace {
  export interface IRequest {
    artistId: string
  }

  export interface IResponse {
    tracks: ITrack[]
  }
}
