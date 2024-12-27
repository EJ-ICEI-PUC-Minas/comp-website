import React, { useState } from 'react'
import {
  Card,
  TextField,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { styled } from '@mui/system'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import NameField from '../inputs/NameField'
import PhoneNumberField from '../inputs/PhoneNumberField'

const Input = styled('input')({
  display: 'none',
})

const coursesWithPeriods = {
  'Ciência da Computação': 8,
  'Engenharia de Software': 10,
  'Ciência de Dados': 4,
}

const CVForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    linkedIn: '',
    gitHub: '',
    course: '',
    period: '',
    resume: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'course') setFormData((prev) => ({ ...prev, period: '' }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  const generatePeriods = (course) => {
    const totalPeriods = coursesWithPeriods[course] || 0
    const periods = Array.from(
      { length: totalPeriods },
      (_, i) => `${i + 1}º Semestre`
    )
    return [...periods, 'Irregular']
  }

  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        Formulário de Inscrição
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NameField />
          </Grid>

          <Grid item xs={12}>
            <PhoneNumberField />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="LinkedIn (Opcional)"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GitHub (Opcional)"
              name="gitHub"
              value={formData.gitHub}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="course-label">Curso</InputLabel>
                <Select
                  labelId="course-label"
                  id="course-select"
                  value={formData.course}
                  name="course"
                  onChange={handleChange}
                  required
                >
                  {Object.keys(coursesWithPeriods).map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="period-label">Período Atual</InputLabel>
                <Select
                  labelId="period-label"
                  id="period-select"
                  value={formData.period}
                  name="period"
                  onChange={handleChange}
                  required
                  disabled={!formData.course}
                >
                  {generatePeriods(formData.course).map((period) => (
                    <MenuItem key={period} value={period}>
                      {period}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <label htmlFor="resume-upload">
              <Input
                accept="application/pdf"
                id="resume-upload"
                type="file"
                onChange={handleFileChange}
                required
              />
              <Button
                fullWidth
                variant="outlined"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Anexar Currículo (PDF)
              </Button>
            </label>
            {formData.resume && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Arquivo: {formData.resume.name}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}

export default CVForm
