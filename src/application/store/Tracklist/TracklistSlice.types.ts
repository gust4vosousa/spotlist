import { ITrack } from '@/domain/entities'

export interface ITracklistState {
  tracklist: {
    data: ITrack[]
    error: string
    url: string
  }
}
