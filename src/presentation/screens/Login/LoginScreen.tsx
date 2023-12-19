import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import { translate } from '../../../application/utils/Translate/TranslateUtils'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { useLoginScreenRules } from './LoginScreen.rules'
import { ILoginScreenProps } from './LoginScreen.types'

export const LoginScreen: React.FC<ILoginScreenProps> = props => {
  const { getAuthCode, isAuthAccessTokenBusy } = useLoginScreenRules(props)

  return (
    <ScreenProvider>
      <Card
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'center',
          padding: 16,
        }}>
        <Typography>{translate('')}</Typography>

        <Typography fontSize={28}>
          {isAuthAccessTokenBusy
            ? translate('screens.login.logging')
            : translate('screens.login.log_in')}
        </Typography>

        <Button
          color="success"
          disabled={isAuthAccessTokenBusy}
          onClick={() => getAuthCode()}
          variant="contained">
          {isAuthAccessTokenBusy
            ? translate('screens.login.logging')
            : translate('screens.login.log_in_spotify')}
        </Button>
      </Card>
    </ScreenProvider>
  )
}
