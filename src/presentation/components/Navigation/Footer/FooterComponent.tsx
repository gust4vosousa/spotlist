import React from 'react'

import { Box } from '@mui/material'

export const FooterComponent: React.FC = () => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: 10,
      paddingBottom: 16,
    }}
  >
    {`v${process.env.REACT_APP_VERSION} - App Developed by Gustavo Anjos`}
  </Box>
)
