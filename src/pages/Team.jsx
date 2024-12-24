import React from 'react'
import { Grid2, Container, Typography, Box, Divider } from '@mui/material'
import ProfileCard from '../components/ProfileCard'
import { team, mentors } from '../../data/members.js'
import SectionContainer from '../components/SectionContainer.jsx'

const Team = () => {
  return (
    <Container sx={{ padding: '32px' }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
        Conheça o Nosso Time
      </Typography>
      <Typography variant="body2" align="center" sx={{ pt: 1, pb: 4 }}>
        Nossa equipe é formada por alunos de graduação dos cursos do{' '}
        <strong>Instituto de Ciências Exatas e Informática da PUC Minas</strong>
        .
      </Typography>
      <SectionContainer title="Equipe">
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {team.map((member) => (
            <Grid2 key={member.id} xs={12} sm={6} md={4} size={4}>
              <ProfileCard
                name={member.name}
                surname={member.surname}
                role={member.role}
                imageProfile={member.imageProfile}
                course={member.course}
                description={member.description}
                instagramUrl={member.instagramUrl}
                githubUrl={member.githubUrl}
                linkedinUrl={member.linkedinUrl}
              />
            </Grid2>
          ))}
        </Grid2>
      </SectionContainer>
      <Box sx={{ my: 4 }} />
      <SectionContainer title="Mentores">
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {mentors.map((member) => (
            <Grid2 key={member.id} xs={12} sm={6} md={4} size={4}>
              <ProfileCard
                name={member.name}
                surname={member.surname}
                role={member.role}
                imageProfile={member.imageProfile}
                course={member.course}
                description={member.description}
                instagramUrl={member.instagramUrl}
                githubUrl={member.githubUrl}
                linkedinUrl={member.linkedinUrl}
              />
            </Grid2>
          ))}
        </Grid2>
      </SectionContainer>
    </Container>
  )
}

export default Team
