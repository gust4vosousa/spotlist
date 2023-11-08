import { RouteObject, createHashRouter } from 'react-router-dom'
import { makeHomeScreenFactory } from '../factories/screens/Home/HomeScreenFactory'
import { makeLoginScreenFactory } from '../factories/screens/Login/LoginScreenFactory'

const applicationRoutes: RouteObject[] = [
  {
    path: '/',
    element: makeLoginScreenFactory(),
  },
  {
    path: '/home',
    element: makeHomeScreenFactory(),
  },
]

export const router = createHashRouter(applicationRoutes)
