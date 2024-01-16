import axios from 'axios'

import {
  ITrackSearch,
  TrackSearchNamespace
} from '@/domain/usecases/Track/Search/TrackSearch.types'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'

export class TrackSearch implements ITrackSearch {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({ query, offset, limit }: TrackSearchNamespace.IRequest) => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/search?q=artist:${query}&type=track&limit=${limit}&offset=${offset}`

    const response = await axios.get<TrackSearchNamespace.IResponse>(url, {
      headers
    })

    return response.data
  }
}
