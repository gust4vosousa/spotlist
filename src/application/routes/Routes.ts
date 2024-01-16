import { makeHomeScreenFactory } from '@/application/factories/screens/Home/HomeScreenFactory'
import { makeLoginScreenFactory } from '@/application/factories/screens/Login/LoginScreenFactory'
import { RouteObject, createHashRouter } from 'react-router-dom'

const applicationRoutes: RouteObject[] = [
  {
    path: '/',
    element: makeLoginScreenFactory()
  },
  {
    path: '/home',
    element: makeHomeScreenFactory()
  }
]

export const router = createHashRouter(applicationRoutes)
