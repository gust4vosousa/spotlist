import axios from 'axios'

import {
  IPlaylistCreate,
  PlaylistCreateNamespace
} from '@/domain/usecases/Playlist/Create/PlaylistCreate.types'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'

export class PlaylistCreate implements IPlaylistCreate {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({
    description,
    isPublic,
    name,
    userId
  }: PlaylistCreateNamespace.IRequest) => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/users/${userId}/playlists`

    const response = await axios.post<PlaylistCreateNamespace.TResponse>(
      url,
      {
        description,
        name,
        public: isPublic
      },
      {
        headers
      }
    )

    return response.data
  }
}
