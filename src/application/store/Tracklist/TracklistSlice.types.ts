import { ITrack } from '../../../domain/entities'

export interface ITracklistState {
  recommendations: ITrack[]
  tracklist: ITrack[]
  topTracks: ITrack[]
}
