import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './application/routes/Routes'
import { store } from './application/store/store'
import { AppProvider } from './presentation/components/Providers/App/AppProvider'

export const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </StoreProvider>
  )
}
