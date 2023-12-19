import { TrackRecommendations } from '../../../../../data/usecases/Track/Recommendations/TrackRecommendations'
import { makeHttpClientFactory } from '../../../infra/HttpClient/HttpClientFactory'

export const makeTrackRecommendationsFactory = () =>
  new TrackRecommendations(makeHttpClientFactory())
