import { createContext, useContext, useMemo, useState } from 'react'

import { IColorModeContext } from '@/application/contexts/ColorMode/ColorModeContext.types'
import { PaletteMode } from '@mui/material'

export const ColorModeContext = createContext<IColorModeContext>({
  currentColorMode: 'dark',
  toggleColorMode: () => null
})

export const useColorModeContext = (): IColorModeContext =>
  useContext(ColorModeContext)

export const useColorModeContextRules = () => {
  const [currentColorMode, setCurrentColorMode] = useState<PaletteMode>('dark')

  const colorModeContextValue = useMemo<IColorModeContext>(
    () => ({
      currentColorMode,
      toggleColorMode: () =>
        setCurrentColorMode(prev => (prev === 'dark' ? 'light' : 'dark'))
    }),
    [currentColorMode]
  )

  return { colorModeContextValue, currentColorMode }
}
