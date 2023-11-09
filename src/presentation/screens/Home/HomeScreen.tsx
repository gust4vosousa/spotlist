import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { AutoCompleteComponent } from '../../components/Input/AutoComplete/AutoCompleteComponent'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { useHomeScreenRules } from './HomeScreen.rules'
import { IHomeScreenProps } from './HomeScreen.types'

export const HomeScreen: React.FC<IHomeScreenProps> = props => {
  const {
    artistList,
    currentArtist,
    handleOnChangeArtist,
    selectedArtists,
    setInputValue,
  } = useHomeScreenRules(props)

  return (
    <ScreenProvider>
      <Card style={{ padding: 16 }}>
        <Box>
          <AutoCompleteComponent
            isLoading={false}
            label="Artist"
            onChange={handleOnChangeArtist}
            onInputChange={setInputValue}
            optionKey="name"
            options={artistList}
            value={currentArtist}
          />
        </Box>
      </Card>

      {selectedArtists.length > 0 && (
        <>
          <Typography variant="body1">Selected artists</Typography>
          <>{selectedArtists.map(a => a.name)}</>
        </>
      )}
    </ScreenProvider>
  )
}
