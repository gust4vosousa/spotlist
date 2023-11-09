import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { Fragment } from 'react'
import { IconComponent } from '../../Data/Icon/IconComponent'
import { EIcons } from '../../Data/Icon/IconComponent.types'
import { IArtistListProps } from './ArtistListComponent.types'

export const ArtistListComponent: React.FC<IArtistListProps> = ({
  artists,
  onDelete,
}) => (
  <List>
    {artists.map(artist => (
      <Fragment key={artist.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={artist.images[0]?.url} />
          </ListItemAvatar>
          <ListItemText primary={artist.name} />
          <IconButton onClick={() => onDelete(artist)}>
            <IconComponent icon={EIcons.DELETE} />
          </IconButton>
        </ListItem>
      </Fragment>
    ))}
  </List>
)
