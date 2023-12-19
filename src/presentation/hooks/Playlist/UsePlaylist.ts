import { useCallback, useEffect, useMemo, useState } from 'react'
import { makeArtistTopTracksFactory } from '../../../application/factories/usecases/Artist'
import { makeTrackRecommendationsFactory } from '../../../application/factories/usecases/Track/Recommendations/TrackRecommendationsFactory'
import { ITrack } from '../../../domain/entities'
import { useHandleRequest } from '../HandleRequest/UseHandleRequest'
import { IPlaylistConfig } from './UsePlaylist.types'

export const usePlaylist = () => {
  const [playlistSize, setPlaylistSize] = useState<number>(0)
  const [recommendations, setRecommendations] = useState<ITrack[]>([])
  const [topTracks, setTopTracks] = useState<ITrack[]>([])
  const [tracklistData, setTracklistData] = useState<ITrack[]>([])

  const { handle: getArtistTopTracks, isBusy: isArtistTopTracksBusy } =
    useHandleRequest(makeArtistTopTracksFactory().handle, null)

  const {
    handle: getTrackRecommendations,
    isBusy: isTrackRecommendationsBusy,
  } = useHandleRequest(makeTrackRecommendationsFactory().handle, null)

  const { isTracklistBusy } = useMemo(
    () => ({
      isTracklistBusy: isArtistTopTracksBusy || isTrackRecommendationsBusy,
    }),
    [isArtistTopTracksBusy, isTrackRecommendationsBusy],
  )

  const getTopTracks = useCallback(
    async ({
      artistIds,
      country,
    }: Pick<IPlaylistConfig, 'artistIds' | 'country'>) => {
      const tracks: ITrack[] = []

      const promises = artistIds.map(async artistId => {
        const response = await getArtistTopTracks({
          artistId,
          country,
        })

        if (response) {
          tracks.push(...response.tracks)
        }
      })

      await Promise.all(promises)

      setTopTracks(tracks)
    },
    [getArtistTopTracks],
  )

  const getRecommendations = useCallback(
    async ({ artistIds }: Pick<IPlaylistConfig, 'artistIds'>) => {
      const response = await getTrackRecommendations({
        artistIds,
        limit: 10,
      })

      setRecommendations(response?.tracks || [])
    },
    [getTrackRecommendations],
  )

  const shuffleTracklist = useCallback(() => {
    const shuffled = [...topTracks, ...recommendations]
      .map(track => ({ track, sortValue: Math.random() }))
      .sort((a, b) => a.sortValue - b.sortValue)
      .map(({ track }) => track)

    setTracklistData(shuffled.slice(0, playlistSize))
  }, [playlistSize, recommendations, topTracks])

  const createTracklist = useCallback(
    async ({ artistIds, country, recommendations, size }: IPlaylistConfig) => {
      resetTracklist()
      setPlaylistSize(size)

      await getTopTracks({ artistIds, country })

      if (recommendations) {
        await getRecommendations({
          artistIds,
        })
      }
    },
    [getRecommendations, getTopTracks],
  )

  const resetTracklist = () => {
    setTopTracks([])
    setRecommendations([])
  }

  useEffect(() => {
    if (topTracks.length > 0) {
      shuffleTracklist()
    }
  }, [recommendations, shuffleTracklist, topTracks])

  return {
    createTracklist,
    isTracklistBusy,
    resetTracklist,
    refreshTracklist: shuffleTracklist,
    tracklistData,
  }
}
