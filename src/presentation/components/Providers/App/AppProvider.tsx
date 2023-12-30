import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext } from '../../../../application/contexts/ColorMode/ColorModeContext'
import { UserContext } from '../../../../application/contexts/User/UserContext'
import { useAppProviderRules } from './AppProvider.rules'
import { IAppProps } from './AppProvider.types'

export const AppProvider: React.FC<IAppProps> = ({ children }) => {
  const { colorModeContextValue, theme, userContextValue } =
    useAppProviderRules()

  return (
    <UserContext.Provider value={userContextValue}>
      <ColorModeContext.Provider value={colorModeContextValue}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContext.Provider>
  )
}
