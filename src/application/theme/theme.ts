import { ThemeOptions } from '@mui/material'

export const COMPONENT_STYLES: ThemeOptions['components'] = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '24px',
        padding: '16px',
        width: '100%',
      },
    },
  },
}

export const CUSTOM_PALETTE: ThemeOptions['palette'] = {
  error: {
    dark: '#99111a',
    main: '#CB2331',
  },
  primary: {
    main: '#1843C6',
  },
  secondary: {
    main: '#097116',
  },
}
