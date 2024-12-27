import React, { useState } from 'react'
import { TextField } from '@mui/material'

const NameField = ({
  label = 'Nome completo',
  errorText = 'O nome deve conter apenas letras e espaços.',
  ...props
}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const newValue = e.target.value
    const isValid = /^[a-zA-ZÀ-ſ\s]*$/.test(newValue)
    setValue(newValue)
    setError(!isValid)
  }

  return (
    <TextField
      {...props}
      fullWidth
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
      error={error}
      helperText={error ? errorText : ''}
    />
  )
}

export default NameField
