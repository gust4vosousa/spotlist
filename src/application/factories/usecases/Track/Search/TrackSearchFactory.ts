import { makeHttpClientFactory } from '@/application/factories/infra/HttpClient/HttpClientFactory'
import { TrackSearch } from '@/data/usecases/Track/Search/TrackSearch'

export const makeTrackSearchFactory = () =>
  new TrackSearch(makeHttpClientFactory())
