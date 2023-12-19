import axios from 'axios'

import {
  ArtistTopTracksNamespace,
  IArtistTopTracks,
} from '../../../../domain/usecases/Artist'
import { HttpClientConfig } from '../../../../infra/HttpClient/HttpClientConfig'

export class ArtistTopTracks implements IArtistTopTracks {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({ artistId, country }: ArtistTopTracksNamespace.IRequest) => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/artists/${artistId}/top-tracks?market=${country}`

    const response = await axios.get<ArtistTopTracksNamespace.IResponse>(url, {
      headers,
    })

    return response.data
  }
}
