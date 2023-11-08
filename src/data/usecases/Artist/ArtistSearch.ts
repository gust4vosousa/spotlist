import axios from 'axios'
import {
  ArtistSearchNamespace,
  IArtistSearch,
} from '../../../domain/usecases/Artist/ArtistSearch.types'
import { HttpClientConfig } from '../../../infra/HttpClient/HttpClientConfig'

export class ArtistSearch implements IArtistSearch {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({ artistName }: ArtistSearchNamespace.IRequest) => {
    const url = `${this.httpClient.API_BASE_URL}/v1/search?type=artist&q=${artistName}`

    const response = await axios.get<ArtistSearchNamespace.IResponse>(url, {
      headers: this.httpClient.headers,
    })

    return response.data
  }
}
