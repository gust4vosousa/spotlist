import { ArtistSearch, ArtistTopTracks } from '../../../data/usecases/Artist'

export interface IHomeScreenProps {
  artistSearchService: ArtistSearch
  artistTopTracksService: ArtistTopTracks
}

export interface IPlaylistForm {
  includeRecommendations: boolean
  tracklistSize: ETracklistSizes
}

export enum ETracklistSizes {
  TEN = 10,
  TWENTY = 20,
  THIRTY = 30,
  FORTY = 40,
  FIFTY = 50,
  SIXTY = 60,
  SEVENTY = 70,
  EIGHTY = 80,
  NINETY = 90,
  ONE_HUNDRED = 100,
}
