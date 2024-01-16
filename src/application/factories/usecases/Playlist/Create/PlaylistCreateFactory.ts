import { makeHttpClientFactory } from '@/application/factories/infra/HttpClient/HttpClientFactory'
import { PlaylistCreate } from '@/data/usecases/Playlist/Create/PlaylistCreate'

export const makePlaylistCreateFactory = () =>
  new PlaylistCreate(makeHttpClientFactory())
