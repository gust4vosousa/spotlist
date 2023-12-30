import { ITrack } from '../../../entities'

export interface ITrackSearch {
  handle: (
    request: TrackSearchNamespace.IRequest,
  ) => Promise<TrackSearchNamespace.IResponse>
}

export namespace TrackSearchNamespace {
  export interface IRequest {
    limit: number
    query: string
  }

  export interface IResponse {
    tracks: {
      items: ITrack[]
    }
  }
}
