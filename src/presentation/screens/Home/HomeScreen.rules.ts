import { useCallback, useEffect, useMemo, useState } from 'react'

import { useUserContext } from '../../../application/contexts/User/UserContext'
import { IArtist } from '../../../domain/entities'
import { Validator, useForm } from '../../hooks/Form/UseForm'
import { useHandleRequest } from '../../hooks/HandleRequest/UseHandleRequest'
import { usePlaylist } from '../../hooks/Playlist/UsePlaylist'
import { useStateDebounce } from '../../hooks/StateDebounce/UseStateDebounce'
import {
  ETracklistSizes,
  IHomeScreenProps,
  IPlaylistForm,
} from './HomeScreen.types'

export const TRACKLIST_SIZES = Object.values(ETracklistSizes).filter(
  value => typeof value === 'number',
) as ETracklistSizes[]

export const useHomeScreenRules = ({
  artistSearchService,
  artistTopTracksService,
}: IHomeScreenProps) => {
  const [inputValue, setInputValue] = useStateDebounce<string>('')
  const [selectedArtists, setSelectedArtists] = useState<IArtist[]>([])

  const { userDetails } = useUserContext()

  const {
    createTracklist,
    isTracklistBusy,
    refreshTracklist,
    resetTracklist,
    tracklistData,
  } = usePlaylist()

  const {
    data: artistSearchData,
    handle: handleArtistSearch,
    isBusy: isArtistSearchBusy,
  } = useHandleRequest(artistSearchService.handle, null)

  const { reset, setValue, watch } = useForm<IPlaylistForm>({
    defaultValues: {
      includeRecommendations: false,
      tracklistSize: ETracklistSizes.TEN,
    },
    validationSchema: {
      includeRecommendations: Validator.boolean().required(),
      tracklistSize: Validator.number().oneOf(TRACKLIST_SIZES).required(),
    },
  })

  const isBusy = useMemo(() => isArtistSearchBusy, [isArtistSearchBusy])

  const handleOnDeleteArtist = useCallback((id: IArtist['id']) => {
    setSelectedArtists(prev =>
      prev.filter(selectedArtists => selectedArtists.id !== id),
    )
  }, [])

  const handleOnInputChange = useCallback(
    (input: string) => {
      if (input !== inputValue) {
        setInputValue(input)
      }
    },
    [inputValue, setInputValue],
  )

  const handleSelectArtist = useCallback(
    (artist: IArtist) => {
      setInputValue(artist.name)

      const ids = selectedArtists.map(artist => artist.id)

      if (ids.includes(artist.id)) {
        return
      }

      setSelectedArtists(prev => [...prev, artist])
    },
    [selectedArtists, setInputValue],
  )

  const handleCreateTracklist = useCallback(async () => {
    createTracklist({
      artistIds: selectedArtists.map(artist => artist.id),
      country: userDetails?.country || 'US',
      size: watch('tracklistSize'),
      recommendations: watch('includeRecommendations'),
    })
  }, [createTracklist, selectedArtists, userDetails?.country, watch])

  const handleOnExportTracklist = useCallback(() => {}, [])

  const handleResetForm = useCallback(() => {
    reset()
    setSelectedArtists([])
  }, [reset])

  useEffect(() => {
    if (inputValue) {
      handleArtistSearch({ artistName: inputValue })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  return {
    artistSearchData,
    handleCreateTracklist,
    handleOnDeleteArtist,
    handleOnExportTracklist,
    handleOnInputChange,
    handleResetForm,
    handleSelectArtist,
    isBusy,
    refreshTracklist,
    resetTracklist,
    selectedArtists,
    setValue,
    tracklistData,
    watch,
  }
}
