import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import React, { Fragment } from 'react'
import { ArtistListComponent } from '../../components/Charts/ArtistList/ArtistListComponent'
import { IconComponent } from '../../components/Data/Icon/IconComponent'
import { EIcons } from '../../components/Data/Icon/IconComponent.types'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { useHomeScreenRules } from './HomeScreen.rules'
import { IHomeScreenProps } from './HomeScreen.types'

export const HomeScreen: React.FC<IHomeScreenProps> = props => {
  const {
    artistOptions,
    handleRemoveArtist,
    handleSelectArtist,
    selectedArtists,
    setInputValue,
    user,
  } = useHomeScreenRules(props)

  return (
    <ScreenProvider>
      <Card style={{ padding: 16 }}>
        <Typography variant="h2">{`Hello, ${user}!`}</Typography>

        <Box>
          <Autocomplete
            disabled={false}
            getOptionLabel={option => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_event, newValue) =>
              newValue && handleSelectArtist(newValue)
            }
            onInputChange={(_event, input) => setInputValue(input)}
            options={artistOptions}
            renderInput={params => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <IconComponent icon={EIcons.SEARCH} />,
                }}
                label="Artists"
                placeholder="Artists"
              />
            )}
            renderOption={(props, artist) => (
              <Box component="li" {...props} key={artist.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={artist.images[0]?.url} />
                  </ListItemAvatar>
                  <ListItemText primary={artist.name} />
                </ListItem>
              </Box>
            )}
          />
        </Box>
      </Card>

      <Card style={{ padding: 16 }}>
        {selectedArtists.length > 0 ? (
          <Fragment>
            <Typography>Selected artists</Typography>

            <ArtistListComponent
              artists={selectedArtists}
              onDelete={handleRemoveArtist}
            />
          </Fragment>
        ) : (
          <Typography>No artists selected</Typography>
        )}
      </Card>
    </ScreenProvider>
  )
}
