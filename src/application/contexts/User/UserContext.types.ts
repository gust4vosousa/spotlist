import { IUserDetails } from '@/domain/entities'

export interface IUserContext {
  handleLogout: () => void
  isUserAuthenticated: boolean
  setIsUserAuthenticated: (value: boolean) => void
  userDetails: IUserDetails | null
  setUserDetails: (value: IUserDetails | null) => void
}
