import React from 'react'

import { Button, CircularProgress } from '@mui/material'
import { IconComponent } from '../../Data/Icon/IconComponent'
import { IButtonProps } from './ButtonComponent.types'

export const ButtonComponent: React.FC<IButtonProps> = ({
  children,
  icon,
  inProgress,
  variant = 'contained',
  ...props
}) => (
  <Button
    {...props}
    startIcon={
      icon && (
        <>
          {inProgress ? (
            <CircularProgress color="inherit" size={16} />
          ) : (
            <IconComponent icon={icon} />
          )}
        </>
      )
    }
    variant={variant}
    style={{ borderRadius: '32px', padding: '8px 16px !important' }}>
    {children}
  </Button>
)
