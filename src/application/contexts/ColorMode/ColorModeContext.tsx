import { createContext, useContext } from 'react'
import { IColorModeContext } from './ColorModeContext.types'

export const ColorModeContext = createContext<IColorModeContext>({
  currentColorMode: 'dark',
  toggleColorMode: () => null,
})

export const useColorModeContext = (): IColorModeContext =>
  useContext(ColorModeContext)
