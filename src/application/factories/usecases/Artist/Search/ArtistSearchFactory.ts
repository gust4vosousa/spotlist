import { ArtistSearch } from '../../../../../data/usecases/Artist'
import { makeHttpClientFactory } from '../../../infra/HttpClient/HttpClientFactory'

export const makeArtistSearchFactory = () =>
  new ArtistSearch(makeHttpClientFactory())
