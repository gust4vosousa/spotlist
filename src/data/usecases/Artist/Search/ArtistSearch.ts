import axios from 'axios'

import {
  ArtistSearchNamespace,
  IArtistSearch,
} from '../../../../domain/usecases/Artist'
import { HttpClientConfig } from '../../../../infra/HttpClient/HttpClientConfig'

export class ArtistSearch implements IArtistSearch {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({ artistName }: ArtistSearchNamespace.IRequest) => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/search?type=artist&q=${artistName}`

    const response = await axios.get<ArtistSearchNamespace.IResponse>(url, {
      headers,
    })

    return response.data
  }
}
