import { IArtist } from '@/domain/entities'

export interface IPlaylistConfig {
  artists: IArtist[]
  includeRecommendations: boolean
  size: ETracklistSizes
}

export interface IGetTracksParams extends IPlaylistConfig {
  limit: number
  offset?: number
}

export enum ETracklistSizes {
  Ten = 10,
  TwentyFive = 25,
  Fifty = 50,
  SeventyFive = 75,
  OneHundred = 100,
  OneHundredFifty = 150,
  TwoHundred = 200
}

export enum ELimitRanges {
  MAX = 50
}
