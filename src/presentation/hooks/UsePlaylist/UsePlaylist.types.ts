import { IArtist } from '../../../domain/entities'

export interface IPlaylistConfig {
  artists: IArtist[]
  includeRecommendations: boolean
  size: ETracklistSizes
}

export interface IGetTracksParams
  extends Pick<IPlaylistConfig, 'artists' | 'includeRecommendations'> {
  limit: number
  offset?: number
}

export enum ETracklistSizes {
  SMALL = 10,
  MEDIUM = 25,
  LARGE = 50,
}

export enum ELimitRanges {
  DEFAULT = 10,
  MAX = 50,
}
