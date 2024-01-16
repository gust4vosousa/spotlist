import React from 'react'

import { translate } from '@/application/utils/Translate/TranslateUtil'
import { IconComponent } from '@/presentation/components/Data/Icon/IconComponent'
import { EIcons } from '@/presentation/components/Data/Icon/IconComponent.types'
import { ButtonComponent } from '@/presentation/components/Input/Button/ButtonComponent'
import { CheckboxComponent } from '@/presentation/components/Input/Checkbox/CheckboxComponent'
import { SelectComponent } from '@/presentation/components/Input/Select/SelectComponent'
import { usePlaylistFormContainerRules } from '@/presentation/containers/Form/Playlist/PlaylistFormContainer.rules'
import { usePlaylist } from '@/presentation/hooks/UsePlaylist/UsePlaylist'
import { ETracklistSizes } from '@/presentation/hooks/UsePlaylist/UsePlaylist.types'
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
  Typography
} from '@mui/material'

export const PlaylistFormContainer: React.FC = () => {
  const { createTracklist, isTracklistBusy } = usePlaylist()

  const {
    artistSearchData,
    formValues,
    handleOnInputChange,
    handleSelectArtist,
    isArtistSearchBusy,
    reset,
    setValue
  } = usePlaylistFormContainerRules()

  const isButtonDisabled =
    formValues.artists.length <= 0 || isArtistSearchBusy || isTracklistBusy

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
                  borderRadius: '32px'
                }
              }}
              label={translate.t('generic.artists')}
              onChange={({ target }) => handleOnInputChange(target.value)}
              placeholder={translate.t('screens.home.placeholders.artists')}
            />
          )}
          renderOption={(props, { id, images, name }) => (
            <ListItem {...props} key={id}>
              <ListItemAvatar>
                <Avatar alt='Artist avatar' src={images[0]?.url} />
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

      <Grid
        item
        xs={8}
        md={3}
        style={{ alignItems: 'center', display: 'flex' }}
      >
        <CheckboxComponent
          isChecked={formValues.includeRecommendations}
          onChange={value => setValue('includeRecommendations', value)}
          label={translate.t('generic.similar_artists')}
        />
      </Grid>

      <Grid item display='flex' gap='8px' xs={12}>
        <ButtonComponent
          color='error'
          disabled={isButtonDisabled}
          icon={EIcons.DELETE}
          onClick={() => reset()}
          variant='contained'
        >
          {translate.t('generic.reset')}
        </ButtonComponent>
        <ButtonComponent
          disabled={isButtonDisabled}
          icon={EIcons.QUEUE_MUSIC}
          inProgress={isTracklistBusy}
          onClick={() => createTracklist(formValues)}
          variant='contained'
        >
          {translate.t('generic.create')}
        </ButtonComponent>
      </Grid>

      <Grid item xs={12}>
        <Card
          elevation={4}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <Typography fontSize={18} fontWeight={600}>
            {translate.t('screens.home.selected_artists')}
          </Typography>
          {formValues.artists.length > 0 ? (
            <Box display='flex' flexWrap='wrap' flexDirection='row' gap={1}>
              {formValues.artists.map(({ id, images, name }) => (
                <Chip
                  avatar={<Avatar alt='Artist avatar' src={images[0]?.url} />}
                  key={id}
                  label={name}
                  onDelete={() =>
                    setValue(
                      'artists',
                      formValues.artists.filter(artist => artist.id !== id)
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
