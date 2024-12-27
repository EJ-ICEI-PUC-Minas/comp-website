import React from 'react'
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Grid,
} from '@mui/material'
import PhoneNumberField from '../inputs/PhoneNumberField'
import NameField from '../inputs/NameField'

const ProjectProposalForm = () => {
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameField />
        </Grid>
        <Grid item xs={12} md={6}>
          <PhoneNumberField />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="O que você quer construir?"
        variant="outlined"
        margin="normal"
        multiline
        rows={3}
      />

      <TextField
        fullWidth
        label="Quais seriam as funcionalidades da sua aplicação?"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      
      <FormControl component="fieldset" margin="normal" fullWidth>
        <FormLabel component="legend">
          Já tem identidade visual pronta?
        </FormLabel>
        <RadioGroup row defaultValue="Não" name="visual-identity">
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel
            value="Sim, mas gostaria de aprimorá-la"
            control={<Radio />}
            label="Sim, mas gostaria de aprimorá-la"
          />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>
      </FormControl>

      <TextField
        fullWidth
        label="Qual é seu orçamento disponível?"
        variant="outlined"
        margin="normal"
      />

      <Box textAlign="center" marginTop="1rem">
        <Button variant="contained" color="primary" size="large" type="submit">
          Enviar proposta
        </Button>
      </Box>
    </form>
  )
}

export default ProjectProposalForm
