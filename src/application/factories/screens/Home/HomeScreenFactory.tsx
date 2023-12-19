import { HomeScreen } from '../../../../presentation/screens/Home/HomeScreen'
import {
  makeArtistSearchFactory,
  makeArtistTopTracksFactory,
} from '../../usecases/Artist'

export const makeHomeScreenFactory = () => (
  <HomeScreen
    artistSearchService={makeArtistSearchFactory()}
    artistTopTracksService={makeArtistTopTracksFactory()}
  />
)
