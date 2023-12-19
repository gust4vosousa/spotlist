import React from 'react'

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { IconComponent } from '../../Data/Icon/IconComponent'
import { useHeaderComponentRules } from './HeaderComponent.rules'

export const HeaderComponent: React.FC = () => {
  const { actions } = useHeaderComponentRules()

  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={36}>SpotList</Typography>

        <Box style={{ display: 'flex', gap: 16 }}>
          {actions.map(
            ({ icon, onClick, title, visible }) =>
              visible && (
                <Tooltip key={title} title={title}>
                  <IconButton onClick={onClick}>
                    <IconComponent icon={icon} />
                  </IconButton>
                </Tooltip>
              ),
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
