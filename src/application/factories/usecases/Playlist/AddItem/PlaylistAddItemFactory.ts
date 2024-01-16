import { makeHttpClientFactory } from '@/application/factories/infra/HttpClient/HttpClientFactory'
import { PlaylistAddItem } from '@/data/usecases/Playlist/AddItem/PlaylistAddItem'

export const makePlaylistAddItemFactory = () =>
  new PlaylistAddItem(makeHttpClientFactory())
