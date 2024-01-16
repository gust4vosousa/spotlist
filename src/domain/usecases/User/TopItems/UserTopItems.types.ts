import { IArtist } from '@/domain/entities'

export interface IUserTopArtists {
  handle: (
    request: UserTopArtistsNamespace.IRequest
  ) => Promise<UserTopArtistsNamespace.IResponse>
}

export namespace UserTopArtistsNamespace {
  export interface IRequest {
    limit: ETopItemLimits
    timeRange: ETimeRanges
  }

  export interface IResponse {
    href: string
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
    items: IArtist
  }
}

export enum ETopItemLimits {
  TEN = 10,
  TWENTY = 20,
  FIFTY = 50
}

export enum ETimeRanges {
  LONG = 'long_term',
  MEDIUM = 'medium_term',
  SHORT = 'short_term'
}
