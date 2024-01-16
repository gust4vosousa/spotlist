import React from 'react'

import { IconComponent } from '@/presentation/components/Data/Icon/IconComponent'
import { useHeaderComponentRules } from '@/presentation/components/Navigation/Header/HeaderComponent.rules'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'

export const HeaderComponent: React.FC = () => {
  const { actions } = useHeaderComponentRules()

  return (
    <AppBar position='static' enableColorOnDark>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontFamily='Satisfy' fontSize={40}>
          SpotList
        </Typography>

        <Box style={{ display: 'flex', gap: 8 }}>
          {actions.map(
            ({ icon, onClick, title, visible }) =>
              visible && (
                <Tooltip key={title} title={title}>
                  <span>
                    <IconButton onClick={onClick}>
                      <IconComponent icon={icon} />
                    </IconButton>
                  </span>
                </Tooltip>
              )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
