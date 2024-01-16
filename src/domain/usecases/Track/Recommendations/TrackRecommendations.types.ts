import { ITrack } from '@/domain/entities'

export interface ITrackRecommendations {
  handle: (
    request: TrackRecommendationsNamespace.IRequest
  ) => Promise<TrackRecommendationsNamespace.IResponse>
}

export namespace TrackRecommendationsNamespace {
  export interface IRequest {
    limit: number
    artistIds: string[]
  }

  export interface IResponse {
    tracks: ITrack[]
  }
}
