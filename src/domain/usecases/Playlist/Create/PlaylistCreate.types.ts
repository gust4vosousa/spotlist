import { IPlaylist, IUserDetails } from '@/domain/entities'

export interface IPlaylistCreate {
  handle: (
    request: PlaylistCreateNamespace.IRequest
  ) => Promise<PlaylistCreateNamespace.TResponse>
}

export namespace PlaylistCreateNamespace {
  export interface IRequest {
    description?: string
    name: string
    isPublic: boolean
    userId: IUserDetails['id']
  }

  export type TResponse = IPlaylist
}
