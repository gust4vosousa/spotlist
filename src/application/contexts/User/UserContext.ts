import { createContext, useContext } from 'react'
import { IUserContext } from './UserContext.types'

export const UserContext = createContext<IUserContext>({
  handleLogout: () => null,
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => null,
  userDetails: null,
  setUserDetails: () => null,
})

export const useUserContext = (): IUserContext => useContext(UserContext)
