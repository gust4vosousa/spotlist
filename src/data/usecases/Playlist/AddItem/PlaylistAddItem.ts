import axios from 'axios'

import {
  IPlaylistAddItem,
  PlaylistAddItemNamespace
} from '@/domain/usecases/Playlist/AddItem/PlaylistAddItem.types'
import { HttpClientConfig } from '@/infra/HttpClient/HttpClientConfig'

export class PlaylistAddItem implements IPlaylistAddItem {
  constructor(private readonly httpClient: HttpClientConfig) {}

  handle = async ({
    playlistId,
    tracks
  }: PlaylistAddItemNamespace.IRequest) => {
    const headers = this.httpClient.getHeaders()
    const url = `${this.httpClient.API_BASE_URL}/v1/playlists/${playlistId}/tracks`

    await axios.post<void>(url, tracks, {
      headers
    })
  }
}
