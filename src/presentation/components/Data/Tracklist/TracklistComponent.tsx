import React, { Fragment, useEffect, useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import { translate } from '../../../../application/utils/Translate/TranslateUtil'
import { usePlaylist } from '../../../hooks/UsePlaylist/UsePlaylist'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'

export const TracklistComponent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const { exportTracklist, isTracklistBusy, resetTracklist, tracklist } =
    usePlaylist()

  useEffect(() => {
    setIsExpanded(tracklist.length > 0)
  }, [tracklist])

  return (
    <Fragment>
      <Accordion
        disabled={tracklist.length <= 0 || isTracklistBusy}
        expanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
        style={{ borderRadius: '32px' }}>
        <AccordionSummary
          expandIcon={
            <IconButton>
              <IconComponent icon={EIcons.EXPAND_MORE} />
            </IconButton>
          }>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            gap="8px"
            justifyContent="space-between"
            width="100%">
            <Typography fontSize={18} fontWeight={600}>
              {translate.t('generic.playlist')}
            </Typography>

            <Box>
              <Tooltip title="Clear playlist">
                <IconButton
                  disabled={tracklist.length <= 0 || isTracklistBusy}
                  onClick={event => {
                    event.stopPropagation()
                    resetTracklist()
                  }}>
                  <IconComponent icon={EIcons.DELETE} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Export playlist">
                <IconButton
                  disabled={tracklist.length <= 0 || isTracklistBusy}
                  onClick={event => {
                    event.stopPropagation()
                    exportTracklist()
                  }}>
                  <IconComponent icon={EIcons.EXPORT} fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <List dense={true}>
            {tracklist.map(({ album, artists, id, name }, index) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar src={album.images[0].url} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${index + 1}. ${name}`}
                  secondary={artists.map(artist => artist.name).join('; ')}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  )
}
