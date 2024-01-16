import React, { Fragment, useEffect, useState } from 'react'

import { useUserContext } from '@/application/contexts/User/UserContext'
import { translate } from '@/application/utils/Translate/TranslateUtil'
import { IconComponent } from '@/presentation/components/Data/Icon/IconComponent'
import { EIcons } from '@/presentation/components/Data/Icon/IconComponent.types'
import { usePlaylist } from '@/presentation/hooks/UsePlaylist/UsePlaylist'
import { PlaylistDetailsModal } from '@/presentation/modals/PlaylistDetails/PlaylistDetailsModal'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography
} from '@mui/material'

export const TracklistComponent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const {
    exportTracklist,
    isExportBusy,
    isTracklistBusy,
    resetTracklist,
    tracklistData,
    tracklistError
  } = usePlaylist()

  const { userDetails } = useUserContext()

  useEffect(() => {
    setIsExpanded(tracklistData.length > 0)
  }, [tracklistData])

  return (
    <Fragment>
      {tracklistError && (
        <Card elevation={3}>
          <Typography>{tracklistError}</Typography>
        </Card>
      )}

      <Accordion
        disabled={tracklistData.length <= 0 || isTracklistBusy}
        elevation={4}
        expanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
        style={{ borderRadius: '32px' }}
      >
        <AccordionSummary
          expandIcon={
            <IconButton>
              <IconComponent icon={EIcons.EXPAND_MORE} />
            </IconButton>
          }
        >
          <Box
            alignItems='center'
            display='flex'
            flexDirection='row'
            gap='8px'
            justifyContent='space-between'
            width='100%'
          >
            <Typography fontSize={18} fontWeight={600}>
              {translate.t('generic.playlist')}
            </Typography>

            <Box>
              <Tooltip title='Clear playlist'>
                <span>
                  <IconButton
                    disabled={tracklistData.length <= 0 || isTracklistBusy}
                    onClick={event => {
                      event.stopPropagation()
                      resetTracklist()
                    }}
                  >
                    <IconComponent icon={EIcons.DELETE} />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title='Export playlist'>
                <span>
                  <IconButton
                    disabled={tracklistData.length <= 0 || isTracklistBusy}
                    onClick={event => {
                      event.stopPropagation()
                      setIsModalVisible(true)
                    }}
                  >
                    <IconComponent icon={EIcons.EXPORT} fontSize='small' />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <List dense={true}>
            {tracklistData.map(({ album, artists, id, name }, index) => (
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

      {isModalVisible && (
        <PlaylistDetailsModal
          isBusy={isExportBusy}
          isOpen={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onSubmit={details =>
            exportTracklist({ userId: userDetails?.id!, ...details })
          }
        />
      )}
    </Fragment>
  )
}
