import React from 'react'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { ButtonComponent } from '../../components/Input/Button/ButtonComponent'
import { IBaseModalProps } from './BaseModal.types'

export const BaseModal: React.FC<IBaseModalProps> = ({
  actions,
  children,
  isOpen,
  title,
  ...props
}) => (
  <Dialog open={isOpen} {...props}>
    {title && <DialogTitle>{title}</DialogTitle>}

    <DialogContent>{children}</DialogContent>

    {actions && (
      <DialogActions>
        {actions.map(({ children, ...props }, index) => (
          <ButtonComponent {...props} key={`Action ${index}`}>
            {children}
          </ButtonComponent>
        ))}
      </DialogActions>
    )}
  </Dialog>
)
