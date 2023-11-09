import { useCallback, useEffect, useState } from 'react'
import { IArtist } from '../../../domain/entities/ArtistEntity.types'
import { useHandleRequest } from '../../hooks/HandleRequest/UseHandleRequest'
import { useStateDebounce } from '../../hooks/StateDebounce/UseStateDebounce'
import { IHomeScreenProps } from './HomeScreen.types'

export const useHomeScreenRules = ({
  artistSearchService,
}: IHomeScreenProps) => {
  const { data: artistSearchData, handle: handleArtistSearch } =
    useHandleRequest(artistSearchService.handle, null)

  const [currentArtist, setCurrentArtist] = useState<IArtist | null>(null)
  const [selectedArtists, setSelectedArtists] = useState<IArtist[]>([])

  const [inputValue, setInputValue] = useStateDebounce<string>('')

  const artistList: IArtist[] = artistSearchData?.artists.items ?? []

  const handleOnChangeArtist = useCallback((artist: IArtist) => {
    setCurrentArtist(artist)

    if (selectedArtists.includes(artist)) {
      setSelectedArtists(prev =>
        prev.filter(selectedArtists => selectedArtists.id !== artist.id),
      )
      return
    }

    setSelectedArtists(prev => [...prev, artist])
  }, [])

  useEffect(() => {
    if (inputValue) {
      handleArtistSearch({ artistName: inputValue })
    }
  }, [inputValue])

  return {
    artistList,
    currentArtist,
    handleOnChangeArtist,
    selectedArtists,
    setInputValue,
  }
}
