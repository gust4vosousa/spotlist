import { useColorModeContext } from '../../../../application/contexts/ColorMode/ColorModeContext'
import { useUserContext } from '../../../../application/contexts/User/UserContext'
import { translate } from '../../../../application/utils/Translate/TranslateUtil'
import { EIcons } from '../../Data/Icon/IconComponent.types'
import { IHeaderAction } from './HeaderComponent.types'

export const useHeaderComponentRules = () => {
  const { currentColorMode, toggleColorMode } = useColorModeContext()
  const { handleLogout, isUserAuthenticated } = useUserContext()

  const actions: IHeaderAction[] = [
    {
      icon: currentColorMode === 'dark' ? EIcons.DARK_MODE : EIcons.LIGHT_MODE,
      onClick: toggleColorMode,
      title: translate.t('components.header.color_mode'),
      visible: true,
    },
    {
      icon: EIcons.LOGOUT,
      onClick: handleLogout,
      title: translate.t('components.header.logout'),
      visible: isUserAuthenticated,
    },
  ]

  return { actions }
}
