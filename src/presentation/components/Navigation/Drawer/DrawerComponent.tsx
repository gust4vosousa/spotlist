import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { IconComponent } from '../../Data/Icon/IconComponent'
import { useDrawerComponentRules } from './DrawerComponent.rules'

export const DrawerComponent: React.FC = () => {
  const { handleOnClick, isDrawerOpen, menuItems, toggleDrawerOpen } =
    useDrawerComponentRules()

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawerOpen}>
      <List>
        {menuItems.map(({ icon, path, title }) => (
          <ListItem disablePadding key={title}>
            <ListItemButton onClick={() => handleOnClick(path)}>
              <ListItemIcon>
                <IconComponent icon={icon} />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
