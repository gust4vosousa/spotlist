import { TrackSearch } from '../../../../../data/usecases/Track/Search/TrackSearch'
import { makeHttpClientFactory } from '../../../infra/HttpClient/HttpClientFactory'

export const makeTrackSearchFactory = () =>
  new TrackSearch(makeHttpClientFactory())
