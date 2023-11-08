import { ArtistSearch } from '../../../data/usecases/Artist/ArtistSearch'

export interface IHomeScreenProps {
  artistSearchService: ArtistSearch
}

export interface IArtistSearchForm {
  artistName: string
}
