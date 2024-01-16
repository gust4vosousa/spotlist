import React from 'react'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import {
  ColorModeContext,
  UserContext,
  useColorModeContextRules,
  useUserContextRules
} from '@/application/contexts'
import { COMPONENT_STYLES, CUSTOM_PALETTE } from '@/application/theme/theme'
import { IAppProps } from '@/presentation/components/Providers/App/AppProvider.types'

export const AppProvider: React.FC<IAppProps> = ({ children }) => {
  const { colorModeContextValue, currentColorMode } = useColorModeContextRules()
  const { userContextValue } = useUserContextRules()

  const theme = createTheme({
    components: COMPONENT_STYLES,
    palette: {
      ...CUSTOM_PALETTE,
      mode: currentColorMode
    }
  })

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
