import { ITrack } from '@/domain/entities'

export interface ITrackSearch {
  handle: (
    request: TrackSearchNamespace.IRequest
  ) => Promise<TrackSearchNamespace.IResponse>
}

export namespace TrackSearchNamespace {
  export interface IRequest {
    limit: number
    offset?: number
    query: string
  }

  export interface IResponse {
    tracks: {
      items: ITrack[]
    }
  }
}
