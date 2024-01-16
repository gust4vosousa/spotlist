import { useCallback } from 'react'

import { makePlaylistAddItemFactory } from '@/application/factories/usecases/Playlist/AddItem/PlaylistAddItemFactory'
import { makePlaylistCreateFactory } from '@/application/factories/usecases/Playlist/Create/PlaylistCreateFactory'
import { makeTrackRecommendationsFactory } from '@/application/factories/usecases/Track/Recommendations/TrackRecommendationsFactory'
import { makeTrackSearchFactory } from '@/application/factories/usecases/Track/Search/TrackSearchFactory'
import {
  selectTracklistData,
  selectTracklistError,
  selectTracklistUrl
} from '@/application/store/Tracklist/TracklistSelectors'
import {
  clearTracklistState,
  setTracklistData,
  setTracklistError,
  setTracklistUrl
} from '@/application/store/Tracklist/TracklistSlice'
import { useAppDispatch, useAppSelector } from '@/application/store/store'
import { ITrack } from '@/domain/entities'
import { PlaylistCreateNamespace } from '@/domain/usecases/Playlist'
import { useHandleRequest } from '@/presentation/hooks/UseHandleRequest/UseHandleRequest'
import {
  ELimitRanges,
  IPlaylistConfig
} from '@/presentation/hooks/UsePlaylist/UsePlaylist.types'

export const usePlaylist = () => {
  const dispatch = useAppDispatch()

  const tracklistData = useAppSelector(selectTracklistData)
  const tracklistError = useAppSelector(selectTracklistError)
  const tracklistUrl = useAppSelector(selectTracklistUrl)

  const { handle: getArtistTracks, isBusy: isArtistTracksBusy } =
    useHandleRequest(makeTrackSearchFactory().handle, null)

  const {
    handle: getTrackRecommendations,
    isBusy: isTrackRecommendationsBusy
  } = useHandleRequest(makeTrackRecommendationsFactory().handle, null)

  const { handle: postPlaylistCreate, isBusy: isPlaylistCreateBusy } =
    useHandleRequest(makePlaylistCreateFactory().handle, null)

  const { handle: postPlaylistItems, isBusy: isPlaylistItemsBusy } =
    useHandleRequest(makePlaylistAddItemFactory().handle, null)

  const isTracklistBusy = isArtistTracksBusy || isTrackRecommendationsBusy
  const isExportBusy = isPlaylistCreateBusy || isPlaylistItemsBusy

  const handleGetArtistTracks = useCallback(
    async ({ artists, size }: IPlaylistConfig) => {
      const tracks: ITrack[] = []

      const promises = artists.map(async artist => {
        let limit = Math.ceil(size / artists.length)
        let offset = 0

        while (limit > 0) {
          const response = await getArtistTracks({
            limit: limit > ELimitRanges.MAX ? ELimitRanges.MAX : limit,
            offset,
            query: artist.name
          })

          tracks.push(...(response?.tracks.items || []))

          limit -= ELimitRanges.MAX
          offset += ELimitRanges.MAX
        }
      })

      await Promise.all(promises)

      return tracks
    },
    [getArtistTracks]
  )

  const handleGetTrackRecommendations = useCallback(
    async ({ artists, includeRecommendations, size }: IPlaylistConfig) => {
      if (!includeRecommendations) {
        return []
      }

      const response = await getTrackRecommendations({
        artistIds: artists.map(artist => artist.id),
        limit: size
      })

      return response?.tracks || []
    },
    [getTrackRecommendations]
  )

  const exportTracklist = useCallback(
    async (params: PlaylistCreateNamespace.IRequest) => {
      const playlistDetails = await postPlaylistCreate(params)

      if (playlistDetails) {
        await postPlaylistItems({
          playlistId: playlistDetails.id,
          tracks: tracklistData.map(track => track.uri)
        })

        dispatch(setTracklistUrl(playlistDetails.external_urls.spotify))
      }
    },
    [dispatch, postPlaylistCreate, postPlaylistItems, tracklistData]
  )

  const shuffleTracks = useCallback((tracks: ITrack[], size: number) => {
    return tracks
      .map(track => ({ track, sortValue: Math.random() }))
      .sort((a, b) => a.sortValue - b.sortValue)
      .map(({ track }) => track)
      .slice(0, size)
  }, [])

  const resetTracklist = useCallback(() => {
    dispatch(clearTracklistState())
  }, [dispatch])

  const createTracklist = useCallback(
    async (config: IPlaylistConfig) => {
      resetTracklist()

      const artistTracks = await handleGetArtistTracks(config)
      const trackRecomendations = await handleGetTrackRecommendations(config)
      const shuffledTracks = shuffleTracks(
        [...artistTracks, ...trackRecomendations],
        config.size
      )

      dispatch(setTracklistData(shuffledTracks))

      if (shuffledTracks.length < config.size) {
        dispatch(
          setTracklistError(
            `The selected artists have only ${shuffledTracks.length} songs available, so we could not fill the playlist :(`
          )
        )
      }
    },
    [
      dispatch,
      handleGetArtistTracks,
      handleGetTrackRecommendations,
      resetTracklist,
      shuffleTracks
    ]
  )

  return {
    createTracklist,
    exportTracklist,
    isExportBusy,
    isTracklistBusy,
    resetTracklist,
    tracklistData,
    tracklistError,
    tracklistUrl
  }
}
