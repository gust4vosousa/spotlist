export interface IPlaylistAddItem {
  handle: (
    request: PlaylistAddItemNamespace.IRequest,
  ) => Promise<PlaylistAddItemNamespace.IResponse>
}

export namespace PlaylistAddItemNamespace {
  export interface IRequest {
    playlistId: string
    tracks: string[]
  }

  export interface IResponse {}
}
