import { Box, Button } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { FormFieldComponent } from '../../components/Input/FormField/FormFieldComponent'
import { ScreenProvider } from '../../components/Providers/Screen/ScreenProvider'
import { useHomeScreenRules } from './HomeScreen.rules'
import { IHomeScreenProps } from './HomeScreen.types'

export const HomeScreen: React.FC<IHomeScreenProps> = props => {
  const {
    artistSearchData,
    handleArtistSearch,
    initialValues,
    validationSchema,
  } = useHomeScreenRules(props)

  return (
    <ScreenProvider>
      <>{JSON.stringify(artistSearchData)}</>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={({ artistName }) => {
            handleArtistSearch({ artistName })
          }}>
          {({ errors, touched }) => (
            <Form>
              <FormFieldComponent
                error={!!errors.artistName}
                helperText={
                  errors.artistName && touched.artistName && errors.artistName
                }
                id="artistName"
                label="Artist name"
                name="artistName"
                placeholder="e.g. Madonna"
                required
              />
              <Button type="submit" variant="contained">
                Search
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </ScreenProvider>
  )
}
