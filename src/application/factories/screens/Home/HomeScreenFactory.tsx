import { HomeScreen } from '../../../../presentation/screens/Home/HomeScreen'
import {
  makeArtistSearchFactory,
  makeArtistTopTracksFactory,
} from '../../usecases/Artist'
import { makeUserFactory } from '../../usecases/User/UserFactory'

export const makeHomeScreenFactory = () => (
  <HomeScreen
    artistSearchService={makeArtistSearchFactory()}
    artistTopTracksService={makeArtistTopTracksFactory()}
    userService={makeUserFactory()}
  />
)
