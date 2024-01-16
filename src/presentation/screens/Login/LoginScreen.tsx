import React from 'react'

import { translate } from '@/application/utils/Translate/TranslateUtil'
import { ButtonComponent } from '@/presentation/components/Input/Button/ButtonComponent'
import { ScreenProvider } from '@/presentation/components/Providers/Screen/ScreenProvider'
import { useLoginScreenRules } from '@/presentation/screens/Login/LoginScreen.rules'
import { ILoginScreenProps } from '@/presentation/screens/Login/LoginScreen.types'
import { Card, Typography } from '@mui/material'

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
          padding: 16
        }}
      >
        <Typography fontSize={28}>
          {isAuthAccessTokenBusy
            ? translate.t('screens.login.logging')
            : translate.t('screens.login.log_in')}
        </Typography>

        <ButtonComponent
          color='secondary'
          disabled={isAuthAccessTokenBusy}
          onClick={() => getAuthCode()}
          variant='contained'
        >
          {isAuthAccessTokenBusy
            ? translate.t('screens.login.logging')
            : translate.t('screens.login.log_in_spotify')}
        </ButtonComponent>
      </Card>
    </ScreenProvider>
  )
}
