import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { IUserContext } from '@/application/contexts/User/UserContext.types'
import { makeUserFactory } from '@/application/factories/usecases/User/UserFactory'
import { IUserDetails } from '@/domain/entities'
import { useHandleRequest } from '@/presentation/hooks/UseHandleRequest/UseHandleRequest'

export const UserContext = createContext<IUserContext>({
  handleLogout: () => null,
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => null,
  userDetails: null,
  setUserDetails: () => null
})

export const useUserContext = (): IUserContext => useContext(UserContext)

export const useUserContextRules = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false)
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null)

  const { handle: getUser } = useHandleRequest(makeUserFactory().handle, null)

  const handleLogout = useCallback(() => {
    setIsUserAuthenticated(false)
    setUserDetails(null)

    window.history.replaceState(null, '', window.location.pathname)
    window.localStorage.setItem('access_token', '')
    window.localStorage.setItem('code_verifier', '')
  }, [])

  const handleUserDetails = useCallback(async () => {
    const user = await getUser()
    setUserDetails(user)
  }, [getUser])

  const userContextValue = useMemo<IUserContext>(
    () => ({
      handleLogout,
      isUserAuthenticated,
      setIsUserAuthenticated,
      userDetails,
      setUserDetails
    }),
    [handleLogout, isUserAuthenticated, userDetails]
  )

  useEffect(() => {
    if (isUserAuthenticated && !userDetails) {
      handleUserDetails()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated, userDetails])

  return { userContextValue }
}
