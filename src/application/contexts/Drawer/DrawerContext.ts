import { createContext, useContext } from 'react'
import { IDrawerContext } from './DrawerContext.types'

export const DrawerContext = createContext<IDrawerContext>({
  isDrawerOpen: false,
  toggleDrawerOpen: () => null,
})

export const useDrawerContext = (): IDrawerContext => useContext(DrawerContext)
