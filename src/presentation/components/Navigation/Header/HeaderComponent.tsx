import React from 'react'

import { AppBar, IconButton, Toolbar } from '@mui/material'
import { useColorModeContext } from '../../../../application/contexts/ColorMode/ColorModeContext'
import { useDrawerContext } from '../../../../application/contexts/Drawer/DrawerContext'
import { IconComponent } from '../../Data/Icon/IconComponent'
import { EIcons } from '../../Data/Icon/IconComponent.types'

export const HeaderComponent: React.FC = () => {
  const { currentColorMode, toggleColorMode } = useColorModeContext()
  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <IconButton onClick={toggleDrawerOpen}>
          <IconComponent icon={EIcons.MENU} />
        </IconButton>

        {/* <Typography fontSize={48}>SpotList</Typography> */}

        <IconButton onClick={toggleColorMode}>
          <IconComponent
            icon={
              currentColorMode === 'dark' ? EIcons.DARK_MODE : EIcons.LIGHT_MODE
            }
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
