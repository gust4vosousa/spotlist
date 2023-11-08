import * as Yup from 'yup'
import { useHandleRequestHook } from '../../hooks/HandleRequest/UseHandleRequestHook'
import { IArtistSearchForm, IHomeScreenProps } from './HomeScreen.types'

export const useHomeScreenRules = ({
  artistSearchService,
}: IHomeScreenProps) => {
  const { data: artistSearchData, handle: handleArtistSearch } =
    useHandleRequestHook(artistSearchService.handle, null)

  const initialValues: IArtistSearchForm = {
    artistName: '',
  }

  const validationSchema = Yup.object().shape({
    artistName: Yup.string().required('Please, enter an artist name'),
  })

  return {
    artistSearchData,
    handleArtistSearch,
    initialValues,
    validationSchema,
  }
}
