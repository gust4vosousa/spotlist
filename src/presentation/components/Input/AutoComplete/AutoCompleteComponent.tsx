import { Autocomplete, TextField } from '@mui/material'
import { IconComponent } from '../../Data/Icon/IconComponent'
import { EIcons } from '../../Data/Icon/IconComponent.types'
import { IAutoCompleteProps } from './AutoCompleteComponent.types'

export const AutoCompleteComponent = <T,>({
  isLoading,
  label,
  onChange,
  onInputChange,
  optionKey,
  options,
  value,
}: IAutoCompleteProps<T>) => (
  <Autocomplete
    disabled={isLoading}
    getOptionLabel={option => String(option[optionKey])}
    onChange={(_event, newValue) => newValue && onChange(newValue)}
    onInputChange={(_event, input) => onInputChange(input)}
    options={options}
    renderInput={params => (
      <TextField
        {...params}
        InputProps={{
          ...params.InputProps,
          startAdornment: <IconComponent icon={EIcons.SEARCH} />,
        }}
        label={label}
        placeholder={label}
      />
    )}
  />
)
