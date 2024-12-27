import { Container, Typography } from '@mui/material'
import React from 'react'
import ProjectProposalForm from '../components/forms/ProjectProposalForm'

const ProjectSubmission = () => {
  return (
    <Container sx={{ padding: '32px' }}>
      <Typography variant="h4" gutterBottom>
        Qual ideia você quer transformar em realidade?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nesse formulário, vamos avaliar sua ideia de projeto e entrar em
        contato. Atente-se para descrever seu projeto de forma clara e precisa.
        Seus dados de contato estão restritos e seguros conosco.
      </Typography>
      <ProjectProposalForm />
    </Container>
  )
}

export default ProjectSubmission
