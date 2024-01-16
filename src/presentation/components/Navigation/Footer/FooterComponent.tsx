import React from 'react'

import { Box } from '@mui/material'
// import { version } from '@root/package.json'

export const FooterComponent: React.FC = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 10,
        paddingBottom: 16
      }}
    >
      {/* {`v${version} - App Developed by Gustavo Anjos`} */}
    </Box>
  )
}
