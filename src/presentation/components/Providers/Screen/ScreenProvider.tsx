import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUserContext } from '@/application/contexts/User/UserContext'
import { FooterComponent } from '@/presentation/components/Navigation/Footer/FooterComponent'
import { HeaderComponent } from '@/presentation/components/Navigation/Header/HeaderComponent'
import { IScreenProps } from '@/presentation/components/Providers/Screen/ScreenProvider.types'
import { Box } from '@mui/material'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => {
  const navigate = useNavigate()
  const { handleLogout, isUserAuthenticated } = useUserContext()

  useEffect(() => {
    if (!isUserAuthenticated) {
      handleLogout()
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated])

  return (
    <Fragment>
      <HeaderComponent />
      <Box style={{ padding: 16 }}>{children}</Box>
      <FooterComponent />
    </Fragment>
  )
}
