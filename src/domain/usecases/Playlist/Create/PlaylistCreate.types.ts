import { IPlaylist } from '../../../entities'

export interface IPlaylistCreate {
  handle: (
    request: PlaylistCreateNamespace.IRequest,
  ) => Promise<PlaylistCreateNamespace.TResponse>
}

export namespace PlaylistCreateNamespace {
  export interface IRequest {
    description: string
    name: string
    public: boolean
  }

  export type TResponse = IPlaylist
}
