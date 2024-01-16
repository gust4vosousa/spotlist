export interface IPlaylistAddItem {
  handle: (request: PlaylistAddItemNamespace.IRequest) => Promise<void>
}

export namespace PlaylistAddItemNamespace {
  export interface IRequest {
    playlistId: string
    tracks: string[]
  }
}
