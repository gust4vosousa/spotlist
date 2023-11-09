import { useCallback, useEffect, useState } from 'react'
import { IArtist } from '../../../domain/entities'
import { useHandleRequest } from '../../hooks/HandleRequest/UseHandleRequest'
import { useStateDebounce } from '../../hooks/StateDebounce/UseStateDebounce'
import { IHomeScreenProps } from './HomeScreen.types'

export const useHomeScreenRules = ({
  artistSearchService,
  artistTopTracksService,
  userService,
}: IHomeScreenProps) => {
  const {
    data: artistSearchData,
    handle: handleArtistSearch,
    isFailure: isArtistSearchFailure,
  } = useHandleRequest(artistSearchService.handle, null)

  const { data: artistTopTracks, handle: handleArtistTopTracks } =
    useHandleRequest(artistTopTracksService.handle, null)

  const { data: user, handle: handleUser } = useHandleRequest(
    userService.handle,
    null,
  )

  const [inputValue, setInputValue] = useStateDebounce<string>('')
  const [selectedArtists, setSelectedArtists] = useState<IArtist[]>([])

  const artistOptions: IArtist[] = artistSearchData?.artists.items ?? []

  const handleRemoveArtist = useCallback((artist: IArtist) => {
    setSelectedArtists(prev =>
      prev.filter(selectedArtists => selectedArtists.id !== artist.id),
    )
  }, [])

  const handleSelectArtist = useCallback(
    (artist: IArtist) => {
      const ids = selectedArtists.map(artist => artist.id)

      if (ids.includes(artist.id)) {
        return
      }

      setSelectedArtists(prev => [...prev, artist])
    },
    [selectedArtists],
  )

  useEffect(() => {
    handleUser()
  }, [handleUser])

  useEffect(() => {
    if (inputValue) {
      handleArtistSearch({ artistName: inputValue })
    }
  }, [handleArtistSearch, inputValue])

  return {
    artistOptions,
    handleRemoveArtist,
    handleSelectArtist,
    selectedArtists,
    setInputValue,
    user,
  }
}
