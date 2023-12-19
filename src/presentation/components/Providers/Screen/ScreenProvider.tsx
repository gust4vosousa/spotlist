import React, { Fragment, useEffect } from 'react'

import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../../../application/contexts/User/UserContext'
import { DrawerComponent } from '../../Navigation/Drawer/DrawerComponent'
import { FooterComponent } from '../../Navigation/Footer/FooterComponent'
import { HeaderComponent } from '../../Navigation/Header/HeaderComponent'
import { IScreenProps } from './ScreenProvider.types'

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
      <DrawerComponent />
      <Box style={{ padding: 16 }}>{children}</Box>
      <FooterComponent />
    </Fragment>
  )
}
