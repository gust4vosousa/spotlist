import { ArtistSearch, ArtistTopTracks } from '../../../data/usecases/Artist'
import { User } from '../../../data/usecases/Artist/User/User'

export interface IHomeScreenProps {
  artistSearchService: ArtistSearch
  artistTopTracksService: ArtistTopTracks
  userService: User
}
