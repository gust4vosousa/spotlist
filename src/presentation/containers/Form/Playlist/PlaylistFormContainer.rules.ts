import { makeArtistSearchFactory } from '@/application/factories/usecases/Artist'
import { IArtist } from '@/domain/entities'
import { IPlaylistForm } from '@/presentation/containers/Form/Playlist/PlaylistFormContainer.types'
import { Validator, useForm } from '@/presentation/hooks/UseForm/UseForm'
import { useHandleRequest } from '@/presentation/hooks/UseHandleRequest/UseHandleRequest'
import { ETracklistSizes } from '@/presentation/hooks/UsePlaylist/UsePlaylist.types'
import { useStateDebounce } from '@/presentation/hooks/UseStateDebounce/UseStateDebounce'
import { useCallback, useEffect } from 'react'

export const usePlaylistFormContainerRules = () => {
  const [inputValue, setInputValue] = useStateDebounce<string>('')

  const {
    data: artistSearchData,
    handle: handleArtistSearch,
    isBusy: isArtistSearchBusy
  } = useHandleRequest(makeArtistSearchFactory().handle, null)

  const { formValues, reset, setValue } = useForm<IPlaylistForm>({
    defaultValues: {
      artists: [],
      includeRecommendations: false,
      size: ETracklistSizes.Ten
    },
    validationSchema: {
      artists: Validator.array().required(),
      includeRecommendations: Validator.boolean().required(),
      size: Validator.number().required()
    }
  })

  const handleOnInputChange = useCallback(
    (input: string) => {
      if (input !== inputValue) {
        setInputValue(input)
      }
    },
    [inputValue, setInputValue]
  )

  const handleSelectArtist = useCallback(
    (artist: IArtist) => {
      const isAlreadyIncluded = formValues.artists
        .map(artist => artist.id)
        .includes(artist.id)

      if (isAlreadyIncluded) {
        return
      }

      setValue('artists', [...formValues.artists, artist])
    },
    [formValues.artists, setValue]
  )

  useEffect(() => {
    if (inputValue) {
      handleArtistSearch({ artistName: inputValue })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  return {
    artistSearchData,
    formValues,
    handleOnInputChange,
    handleSelectArtist,
    isArtistSearchBusy,
    reset,
    setValue
  }
}
