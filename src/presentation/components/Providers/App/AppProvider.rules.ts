import { PaletteMode, createTheme } from '@mui/material'
import { useMemo, useState } from 'react'
import { IColorModeContext } from '../../../../application/contexts/ColorMode/ColorModeContext.types'
import { IDrawerContext } from '../../../../application/contexts/Drawer/DrawerContext.types'

export const useAppProviderRules = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const colorModeContextValue = useMemo<IColorModeContext>(
    () => ({
      currentColorMode: mode,
      toggleColorMode: () =>
        setMode(prev => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [mode],
  )

  const drawerContextValue = useMemo<IDrawerContext>(
    () => ({
      isDrawerOpen,
      toggleDrawerOpen: () => setIsDrawerOpen(!isDrawerOpen),
    }),
    [isDrawerOpen],
  )

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0059d6',
      },
      mode,
    },
  })

  return { colorModeContextValue, drawerContextValue, theme }
}
