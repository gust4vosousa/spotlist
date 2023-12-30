import { IArtist } from '../../../../domain/entities'

export interface IPlaylistForm {
  artists: IArtist[]
  includeRecommendations: boolean
  size: number
}
