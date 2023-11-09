import axios from 'axios'

import {
  ArtistTopTracksNamespace,
  IArtistTopTracks,
} from '../../../../domain/usecases/Artist'
import { HttpClientConfig } from '../../../../infra/HttpClient/HttpClientConfig'

export class ArtistTopTracks implements IArtistTopTracks {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({ artistId }: ArtistTopTracksNamespace.IRequest) => {
    const url = `${this.httpClient.API_BASE_URL}/v1/artists/${artistId}/top-tracks`

    const response = await axios.get<ArtistTopTracksNamespace.IResponse>(url, {
      headers: this.httpClient.headers,
    })

    return response.data
  }
}
