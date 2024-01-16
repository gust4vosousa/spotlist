import React from 'react'

import { IconComponent } from '@/presentation/components/Data/Icon/IconComponent'
import { IButtonProps } from '@/presentation/components/Input/Button/ButtonComponent.types'
import { Button, CircularProgress } from '@mui/material'

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
            <CircularProgress color='inherit' size={16} />
          ) : (
            <IconComponent icon={icon} />
          )}
        </>
      )
    }
    variant={variant}
    style={{ borderRadius: '32px', padding: '8px 16px !important' }}
  >
    {children}
  </Button>
)
