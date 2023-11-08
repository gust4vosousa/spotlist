import React, { Fragment } from 'react'

import { Box } from '@mui/material'
import { DrawerComponent } from '../../Navigation/Drawer/DrawerComponent'
import { FooterComponent } from '../../Navigation/Footer/FooterComponent'
import { HeaderComponent } from '../../Navigation/Header/HeaderComponent'
import { IScreenProps } from './ScreenProvider.types'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => (
  <Fragment>
    <HeaderComponent />
    <DrawerComponent />
    <Box style={{ padding: 16 }}>{children}</Box>
    <FooterComponent />
  </Fragment>
)
