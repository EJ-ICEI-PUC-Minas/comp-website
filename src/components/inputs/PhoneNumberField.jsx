import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'

const PhoneNumberField = ({
  label = 'Número de telefone',
  errorText = 'Número de telefone inválido',
  ...props
}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, '')
    const isValid = /^[1-9]{2}9[0-9]{8}$/.test(newValue)
    setValue(newValue)
    setError(!isValid && newValue.length > 0)
  }

  const handleBlur = () => {
    setTouched(true)
  }

  const helperText = touched && error ? errorText : ''

  return (
    <InputMask
      mask="(99) 9 9999-9999"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={props.disabled}
    >
      {() => (
        <TextField
          {...props}
          label={label}
          value={value}
          error={touched && error}
          helperText={helperText}
          fullWidth
        />
      )}
    </InputMask>
  )
}

export default PhoneNumberField
