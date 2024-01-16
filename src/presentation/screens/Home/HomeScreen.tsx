import React from 'react'

import { TracklistComponent } from '@/presentation/components/Data/Tracklist/TracklistComponent'
import { ScreenProvider } from '@/presentation/components/Providers/Screen/ScreenProvider'
import { PlaylistFormContainer } from '@/presentation/containers/Form/Playlist/PlaylistFormContainer'
import { Card, Grid } from '@mui/material'

export const HomeScreen: React.FC = () => (
  <ScreenProvider>
    <Card>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <PlaylistFormContainer />
        </Grid>

        <Grid item>
          <TracklistComponent />
        </Grid>
      </Grid>
    </Card>
  </ScreenProvider>
)
