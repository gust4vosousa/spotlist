import React, { useState } from 'react'

import { Card, Grid } from '@mui/material'
import { TracklistComponent } from '../../components/Data/Tracklist/TracklistComponent'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { PlaylistFormContainer } from '../../containers/Form/Playlist/PlaylistFormContainer'
import { PlaylistDetailsModal } from '../../modals/PlaylistDetails/PlaylistDetailsModal'

export const HomeScreen: React.FC = () => {
  const [isPlaylistDetailsModalVisible, setIsPlaylistDetailsModalVisible] =
    useState<boolean>(false)

  return (
    <ScreenProvider>
      <Card>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <PlaylistFormContainer />
          </Grid>

          <Grid item>
            <TracklistComponent />
          </Grid>
        </Grid>
      </Card>

      {isPlaylistDetailsModalVisible && (
        <PlaylistDetailsModal
          isOpen={isPlaylistDetailsModalVisible}
          onClose={() => setIsPlaylistDetailsModalVisible(false)}
          onSubmit={() => null}
        />
      )}
    </ScreenProvider>
  )
}
