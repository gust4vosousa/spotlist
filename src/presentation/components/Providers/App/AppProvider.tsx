import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { ColorModeContext } from '../../../../application/contexts/ColorMode/ColorModeContext'
import { DrawerContext } from '../../../../application/contexts/Drawer/DrawerContext'
import { UserContext } from '../../../../application/contexts/User/UserContext'
import { useAppProviderRules } from './AppProvider.rules'
import { IAppProps } from './AppProvider.types'

export const AppProvider: React.FC<IAppProps> = ({ children }) => {
  const { colorModeContextValue, drawerContextValue, theme, userContextValue } =
    useAppProviderRules()

  return (
    <UserContext.Provider value={userContextValue}>
      <ColorModeContext.Provider value={colorModeContextValue}>
        <DrawerContext.Provider value={drawerContextValue}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </DrawerContext.Provider>
      </ColorModeContext.Provider>
    </UserContext.Provider>
  )
}
