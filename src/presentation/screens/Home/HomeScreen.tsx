import React from 'react'

import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { translate } from '../../../application/utils/Translate/TranslateUtils'
import { IconComponent } from '../../components/Data/Icon/IconComponent'
import { EIcons } from '../../components/Data/Icon/IconComponent.types'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { TRACKLIST_SIZES, useHomeScreenRules } from './HomeScreen.rules'
import { useHomeScreenStyles } from './HomeScreen.styles'
import { ETracklistSizes, IHomeScreenProps } from './HomeScreen.types'

export const HomeScreen: React.FC<IHomeScreenProps> = props => {
  const {
    artistSearchData,
    handleCreateTracklist,
    handleOnDeleteArtist,
    handleOnExportTracklist,
    handleOnInputChange,
    handleResetForm,
    handleSelectArtist,
    isBusy,
    refreshTracklist,
    resetTracklist,
    selectedArtists,
    setValue,
    tracklistData,
    watch,
  } = useHomeScreenRules(props)

  const { classes } = useHomeScreenStyles()

  return (
    <ScreenProvider>
      <Grid container className={classes.containerGrid} direction="column">
        <Grid item className={classes.containerGrid}>
          <Card className={classes.containerCard}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.containerGrid}
                flexDirection="row"
                xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <Autocomplete
                      getOptionLabel={option => option.name}
                      isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                      }
                      onChange={(_event, newValue) =>
                        newValue && handleSelectArtist(newValue)
                      }
                      options={artistSearchData?.artists.items || []}
                      renderInput={params => (
                        <TextField
                          {...params}
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <IconComponent icon={EIcons.SEARCH} />
                            ),
                          }}
                          label={translate('generic.artists')}
                          onChange={({ target }) =>
                            handleOnInputChange(target.value)
                          }
                          placeholder={translate(
                            'screens.home.placeholders.artists',
                          )}
                        />
                      )}
                      renderOption={(props, { id, images, name }) => (
                        <ListItem {...props} key={id}>
                          <ListItemAvatar>
                            <Avatar alt="Artist avatar" src={images[0]?.url} />
                          </ListItemAvatar>
                          <ListItemText primary={name} />
                        </ListItem>
                      )}
                    />
                  </Grid>

                  <Grid item xs={4} md={2}>
                    <FormControl fullWidth>
                      <InputLabel>
                        {translate('screens.home.labels.playlist_size')}
                      </InputLabel>
                      <Select
                        onChange={({ target }) =>
                          setValue(
                            'tracklistSize',
                            target.value as ETracklistSizes,
                          )
                        }
                        label={translate('screens.home.labels.playlist_size')}
                        value={watch('tracklistSize')}>
                        {TRACKLIST_SIZES.map(size => (
                          <MenuItem value={size}>{size}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={8} md={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={watch('includeRecommendations')}
                          onChange={(_event, value) =>
                            setValue('includeRecommendations', value)
                          }
                        />
                      }
                      label={translate('generic.similar_artists')}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                className={classes.containerGrid}
                flexDirection="column">
                <Typography fontSize={18} fontWeight={600}>
                  {translate('screens.home.selected_artists')}
                </Typography>

                {selectedArtists.length > 0 ? (
                  <Box
                    className={classes.containerGrid}
                    flexWrap="wrap"
                    flexDirection="row">
                    {selectedArtists.map(({ id, images, name }) => (
                      <Chip
                        avatar={
                          <Avatar alt="Artist avatar" src={images[0]?.url} />
                        }
                        key={id}
                        label={name}
                        onDelete={() => handleOnDeleteArtist(id)}
                      />
                    ))}
                  </Box>
                ) : (
                  <Typography>No artists selected</Typography>
                )}
              </Grid>

              <Grid item className={classes.containerGrid} flexDirection="row">
                <Button
                  color="error"
                  disabled={selectedArtists.length <= 0 || isBusy}
                  endIcon={<IconComponent icon={EIcons.DELETE} />}
                  onClick={handleResetForm}
                  variant="contained">
                  {translate('generic.reset')}
                </Button>
                <Button
                  disabled={selectedArtists.length <= 0 || isBusy}
                  endIcon={<IconComponent icon={EIcons.QUEUE_MUSIC} />}
                  onClick={handleCreateTracklist}
                  variant="contained">
                  {translate('generic.create')}
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item className={classes.containerGrid}>
          <Card className={classes.containerCard}>
            <Box
              display="flex"
              gap="16px"
              alignItems="center"
              justifyContent="space-between">
              <Typography fontSize={18} fontWeight={600}>
                {translate('generic.playlist')}
              </Typography>

              <Box display="flex" flexDirection="row" gap="8px">
                <Button
                  color="error"
                  disabled={tracklistData.length <= 0 || isBusy}
                  onClick={resetTracklist}
                  variant="contained">
                  <IconComponent icon={EIcons.DELETE} />
                </Button>
                <Button
                  color="primary"
                  disabled={tracklistData.length <= 0 || isBusy}
                  onClick={refreshTracklist}
                  variant="contained">
                  <IconComponent icon={EIcons.REFRESH} />
                </Button>
                <Button
                  color="secondary"
                  disabled={tracklistData.length <= 0 || isBusy}
                  onClick={handleOnExportTracklist}
                  variant="contained">
                  <IconComponent icon={EIcons.EXPORT} />
                </Button>
              </Box>
            </Box>

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
          </Card>
        </Grid>
      </Grid>
    </ScreenProvider>
  )
}
