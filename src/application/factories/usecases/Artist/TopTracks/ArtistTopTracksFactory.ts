import { ArtistTopTracks } from '../../../../../data/usecases/Artist'
import { makeHttpClientFactory } from '../../../infra/HttpClient/HttpClientFactory'

export const makeArtistTopTracksFactory = () =>
  new ArtistTopTracks(makeHttpClientFactory())
