import { IconProps } from '@mui/material'

export interface IIconProps extends IconProps {
  icon: EIcons
}

export enum EIcons {
  ARROW_BACK = 'arrow_back_ios_new',
  ARROW_FORWARD = 'arrow_forward_ios',
  COMPARE = 'compare',
  DARK_MODE = 'dark_mode',
  DELETE = 'delete',
  EXPORT = 'ios_share',
  EXPAND_LESS = 'expand_less',
  EXPAND_MORE = 'expand_more',
  HOME = 'home',
  LIGHT_MODE = 'light_mode',
  LOGOUT = 'logout',
  MENU = 'menu',
  QUEUE_MUSIC = 'queue_music',
  REFRESH = 'refresh',
  SEARCH = 'search',
  SHINY = 'auto_awesome',
  SWAP = 'swap_horiz',
  WARNING = 'warning',
}
