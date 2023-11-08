import { ArtistSearch } from '../../../../data/usecases/Artist/ArtistSearch'
import { makeHttpCLientFactory } from '../../infra/HttpClient/HttpClientFactory'

export const makeArtistSearchFactory = () =>
  new ArtistSearch(makeHttpCLientFactory())
