import axios from 'axios'

import {
  ITrackRecommendations,
  TrackRecommendationsNamespace
} from '@/domain/usecases/Track/Recommendations/TrackRecommendations.types'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'

export class TrackRecommendations implements ITrackRecommendations {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({
    artistIds,
    limit
  }: TrackRecommendationsNamespace.IRequest) => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/recommendations?limit=${limit}&seed_artists=${artistIds}`

    const response = await axios.get<TrackRecommendationsNamespace.IResponse>(
      url,
      {
        headers
      }
    )

    return response.data
  }
}
