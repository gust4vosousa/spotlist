import { IconProps } from '@mui/material'

export interface IIconProps extends IconProps {
  icon: EIcons
}

export enum EIcons {
  ARROW_BACK = 'arrow_back_ios_new',
  ARROW_FORWARD = 'arrow_forward_ios',
  COMPARE = 'compare',
  DARK_MODE = 'dark_mode',
  EXPAND_MORE = 'expand_more',
  HOME = 'home',
  LIGHT_MODE = 'light_mode',
  MENU = 'menu',
  SEARCH = 'search',
  SHINY = 'auto_awesome',
  SWAP = 'swap_horiz',
  WARNING = 'warning',
}
