import React from 'react'

import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import { translate } from '../../../../application/utils/Translate/TranslateUtil'
import { IconComponent } from '../../../components/Data/Icon/IconComponent'
import { EIcons } from '../../../components/Data/Icon/IconComponent.types'
import { ButtonComponent } from '../../../components/Input/Button/ButtonComponent'
import { CheckboxComponent } from '../../../components/Input/Checkbox/CheckboxComponent'
import { SelectComponent } from '../../../components/Input/Select/SelectComponent'
import { usePlaylist } from '../../../hooks/UsePlaylist/UsePlaylist'
import { ETracklistSizes } from '../../../hooks/UsePlaylist/UsePlaylist.types'
import { usePlaylistFormContainerRules } from './PlaylistFormContainer.rules'

export const PlaylistFormContainer: React.FC = () => {
  const { createTracklist, isTracklistBusy } = usePlaylist()

  const {
    artistSearchData,
    formValues,
    handleOnInputChange,
    handleSelectArtist,
    isArtistSearchBusy,
    reset,
    setValue,
  } = usePlaylistFormContainerRules()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <Autocomplete
          getOptionLabel={option => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_event, newValue) =>
            newValue && handleSelectArtist(newValue)
          }
          options={artistSearchData?.artists.items || []}
          renderInput={params => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: <IconComponent icon={EIcons.SEARCH} />,
                style: {
                  borderRadius: '32px',
                },
              }}
              label={translate.t('generic.artists')}
              onChange={({ target }) => handleOnInputChange(target.value)}
              placeholder={translate.t('screens.home.placeholders.artists')}
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
        <SelectComponent
          fullWidth
          label={translate.t('generic.songs')}
          onChange={value => setValue('size', Number(value))}
          options={Object.values(ETracklistSizes)
            .filter(value => typeof value === 'number')
            .map(value => String(value))}
          value={String(formValues.size)}
        />
      </Grid>

      <Grid item xs={8} md={3}>
        <CheckboxComponent
          isChecked={formValues.includeRecommendations}
          onChange={value => setValue('includeRecommendations', value)}
          label={translate.t('generic.similar_artists')}
        />
      </Grid>

      <Grid item display="flex" gap="8px" xs={12}>
        <ButtonComponent
          color="error"
          disabled={formValues.artists.length <= 0 || isArtistSearchBusy}
          icon={EIcons.DELETE}
          onClick={() => reset()}
          variant="contained">
          {translate.t('generic.reset')}
        </ButtonComponent>
        <ButtonComponent
          disabled={formValues.artists.length <= 0 || isArtistSearchBusy}
          icon={EIcons.QUEUE_MUSIC}
          inProgress={isTracklistBusy}
          onClick={() => createTracklist(formValues)}
          variant="contained">
          {translate.t('generic.create')}
        </ButtonComponent>
      </Grid>

      <Grid item xs={12}>
        <Card
          elevation={3}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Typography fontSize={18} fontWeight={600}>
            {translate.t('screens.home.selected_artists')}
          </Typography>
          {formValues.artists.length > 0 ? (
            <Box flexWrap="wrap" flexDirection="row">
              {formValues.artists.map(({ id, images, name }) => (
                <Chip
                  avatar={<Avatar alt="Artist avatar" src={images[0]?.url} />}
                  key={id}
                  label={name}
                  onDelete={() =>
                    setValue(
                      'artists',
                      formValues.artists.filter(artist => artist.id !== id),
                    )
                  }
                />
              ))}
            </Box>
          ) : (
            <Typography>
              {translate.t('containers.form.playlist.no_artists')}
            </Typography>
          )}
        </Card>
      </Grid>
    </Grid>
  )
}
