import { PaletteMode, createTheme } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { IColorModeContext } from '../../../../application/contexts/ColorMode/ColorModeContext.types'
import { IUserContext } from '../../../../application/contexts/User/UserContext.types'
import { makeUserFactory } from '../../../../application/factories/usecases/User/UserFactory'
import { IUserDetails } from '../../../../domain/entities'
import { useHandleRequest } from '../../../hooks/UseHandleRequest/UseHandleRequest'

export const useAppProviderRules = () => {
  const [currentColorMode, setCurrentColorMode] = useState<PaletteMode>('dark')
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false)
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null)

  const { handle: getUser } = useHandleRequest(makeUserFactory().handle, null)

  const colorModeContextValue = useMemo<IColorModeContext>(
    () => ({
      currentColorMode,
      toggleColorMode: () =>
        setCurrentColorMode(prev => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [currentColorMode],
  )

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
      setUserDetails,
    }),
    [handleLogout, isUserAuthenticated, userDetails],
  )

  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            padding: '16px',
            width: '100%',
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#0059d6',
      },
      secondary: {
        main: '#00872d',
      },
      mode: currentColorMode,
    },
  })

  useEffect(() => {
    if (isUserAuthenticated && !userDetails) {
      handleUserDetails()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated, userDetails])

  return {
    colorModeContextValue,
    theme,
    userContextValue,
  }
}
