import React from 'react'

import { Card, Typography } from '@mui/material'
import { translate } from '../../../application/utils/Translate/TranslateUtil'
import { ButtonComponent } from '../../components/Input/Button/ButtonComponent'
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
        <Typography fontSize={28}>
          {isAuthAccessTokenBusy
            ? translate.t('screens.login.logging')
            : translate.t('screens.login.log_in')}
        </Typography>

        <ButtonComponent
          color="success"
          disabled={isAuthAccessTokenBusy}
          onClick={() => getAuthCode()}
          variant="contained">
          {isAuthAccessTokenBusy
            ? translate.t('screens.login.logging')
            : translate.t('screens.login.log_in_spotify')}
        </ButtonComponent>
      </Card>
    </ScreenProvider>
  )
}
