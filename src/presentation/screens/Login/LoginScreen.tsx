import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { useLoginScreenRules } from './LoginScreen.rules'
import { ILoginScreenProps } from './LoginScreen.types'

export const LoginScreen: React.FC<ILoginScreenProps> = props => {
  const { accessToken, getUserAuth } = useLoginScreenRules(props)

  return (
    <ScreenProvider>
      <Box>
        <Typography variant="h2">{accessToken}</Typography>
      </Box>

      <Button onClick={() => getUserAuth()}>Log in with Spotify</Button>
    </ScreenProvider>
  )
}
