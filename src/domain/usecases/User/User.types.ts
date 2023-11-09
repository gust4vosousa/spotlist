import { IUserDetails } from '../../entities'

export interface IUser {
  handle: () => Promise<UserNamespace.TResponse>
}

export namespace UserNamespace {
  export type TResponse = IUserDetails
}
