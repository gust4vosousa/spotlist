import { useCallback, useState } from 'react'
import { makeTrackRecommendationsFactory } from '../../../application/factories/usecases/Track/Recommendations/TrackRecommendationsFactory'
import { makeTrackSearchFactory } from '../../../application/factories/usecases/Track/Search/TrackSearchFactory'
import { selectTracklist } from '../../../application/store/Tracklist/TracklistSelectors'
import {
  setRecommendations,
  setTopTracks,
  setTracklist,
} from '../../../application/store/Tracklist/TracklistSlice'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../application/store/store'
import { ITrack } from '../../../domain/entities'
import { useHandleRequest } from '../UseHandleRequest/UseHandleRequest'
import {
  ELimitRanges,
  ETracklistSizes,
  IPlaylistConfig,
} from './UsePlaylist.types'

export const usePlaylist = () => {
  const dispatch = useAppDispatch()

  const tracklist = useAppSelector(selectTracklist)

  const [playlistSize, setPlaylistSize] = useState<ETracklistSizes>(
    ETracklistSizes.SMALL,
  )

  const {
    handle: getTrackRecommendations,
    isBusy: isTrackRecommendationsBusy,
  } = useHandleRequest(makeTrackRecommendationsFactory().handle, null)

  const { handle: getArtistTracks, isBusy: isArtistTracksBusy } =
    useHandleRequest(makeTrackSearchFactory().handle, null)

  const isTracklistBusy = isArtistTracksBusy || isTrackRecommendationsBusy

  const getTracks = useCallback(
    async ({
      artists,
      includeRecommendations,
    }: Pick<IPlaylistConfig, 'artists' | 'includeRecommendations'>) => {
      const tracks: ITrack[] = []

      const limit = includeRecommendations
        ? ELimitRanges.DEFAULT
        : Math.ceil(playlistSize / artists.length)

      const promises = artists.map(async artist => {
        const response = await getArtistTracks({
          limit,
          query: artist.name,
        })

        if (response?.tracks.items) {
          const items = response.tracks.items.filter(item =>
            item.artists.filter(itemArtist => itemArtist.id === artist.id),
          )

          tracks.push(...items)
        }
      })

      await Promise.all(promises)

      if (includeRecommendations) {
        const response = await getTrackRecommendations({
          artistIds: artists.map(artist => artist.id),
          limit: 10,
        })

        tracks.push(...(response?.tracks || []))
      }

      return tracks
    },
    [getArtistTracks, getTrackRecommendations, playlistSize],
  )

  const shuffleTracks = useCallback(
    (tracks: ITrack[]) => {
      const shuffled = tracks
        .map(track => ({ track, sortValue: Math.random() }))
        .sort((a, b) => a.sortValue - b.sortValue)
        .map(({ track }) => track)

      dispatch(setTracklist(shuffled.slice(0, playlistSize)))
    },
    [dispatch, playlistSize],
  )

  const exportTracklist = () => {}

  const resetTracklist = useCallback(() => {
    setRecommendations([])
    setTopTracks([])
    dispatch(setTracklist([]))
  }, [dispatch])

  const createTracklist = useCallback(
    async ({ artists, includeRecommendations, size }: IPlaylistConfig) => {
      resetTracklist()
      setPlaylistSize(size)

      const tracks = await getTracks({
        artists,
        includeRecommendations,
      })

      shuffleTracks(tracks)
    },
    [getTracks, resetTracklist, shuffleTracks],
  )

  return {
    createTracklist,
    exportTracklist,
    isTracklistBusy,
    resetTracklist,
    tracklist,
  }
}
