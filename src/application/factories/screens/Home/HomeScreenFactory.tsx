import { HomeScreen } from '../../../../presentation/screens/Home/HomeScreen'
import { makeArtistSearchFactory } from '../../usecases/ArtistSearch/ArtistSearchFactory'

export const makeHomeScreenFactory = () => (
  <HomeScreen artistSearchService={makeArtistSearchFactory()} />
)
