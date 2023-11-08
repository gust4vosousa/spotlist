import { RouteObject, createHashRouter } from 'react-router-dom'
import { HomeScreen } from '../../presentation/screens/Home/HomeScreen'
import { makeLoginScreenFactory } from '../factories/screens/Login/LoginScreenFactory'

const applicationRoutes: RouteObject[] = [
  {
    path: '/',
    element: makeLoginScreenFactory(),
  },
  {
    path: '/home',
    element: <HomeScreen />,
  },
]

export const router = createHashRouter(applicationRoutes)
