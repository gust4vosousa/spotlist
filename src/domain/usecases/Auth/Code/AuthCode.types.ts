export interface IAuthCode {
  handle: () => Promise<void>
}

export enum EAuthScopes {
  ugcImageUpload = 'ugc-image-upload',
  userFollowRead = 'user-follow-read',
  userFollowModify = 'user-follow-modify',
  userReadRecentlyPlayed = 'user-read-recently-played',
  userTopRead = 'user-top-read',
  userReadPlaybackPosition = 'user-read-playback-position',
  userLibraryRead = 'user-library-read',
  userLibraryModify = 'user-library-modify',
  userReadPlaybackState = 'user-read-playback-state',
  userReadCurrentlyPlaying = 'user-read-currently-playing',
  userModifyPlaybackState = 'user-modify-playback-state',
  playlistReadCollaborative = 'playlist-read-collaborative',
  playlistModifyPrivate = 'playlist-modify-private',
  playlistModifyPublic = 'playlist-modify-public',
  playlistReadPrivate = 'playlist-read-private',
  streaming = 'streaming',
  appRemoteControl = 'app-remote-control',
  userReadEmail = 'user-read-email',
  userReadPrivate = 'user-read-private',
}
