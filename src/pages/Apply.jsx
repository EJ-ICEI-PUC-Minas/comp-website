import { Box, Container, Typography, Alert, Grid, Divider } from '@mui/material'
import CVForm from '../components/forms/CVForm'
import SectionTitle from '../components/SectionTitle'

import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import BuildIcon from '@mui/icons-material/Build'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

const benefits = [
  {
    icon: <WorkIcon color="primary" />,
    text: 'Experiência Prática em Projetos Reais',
  },
  { icon: <SchoolIcon color="primary" />, text: 'Destaque para Currículo' },
  {
    icon: <BuildIcon color="primary" />,
    text: 'Desenvolvimento de Habilidades Técnicas',
  },
  {
    icon: <BusinessCenterIcon color="primary" />,
    text: 'Gestão e Empreendedorismo',
  },
]

const Apply = () => {
  return (
    <Container sx={{ padding: '32px' }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} paddingTop={{ md: 8 }}>
        <Grid item xs={12} md={7}>
          <Box sx={{ py: 2 }}>
            <SectionTitle
              title="Venha Fazer parte da COMP EJ !"
              titleSize="h4"
            />
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="body1" paragraph>
              Estamos em busca de estudantes talentosos que queiram crescer
              profissionalmente, trabalhando em projetos reais e desenvolvendo
              suas habilidades em equipe.
            </Typography>

            <Typography variant="body1" paragraph>
              Aqui você terá a oportunidade de colocar em prática todo o seu
              conhecimento acadêmico e aprender ainda mais. É a chance de
              desenvolver habilidades técnicas e comportamentais em um ambiente
              de constante evolução!
            </Typography>

            <Alert severity="info" sx={{ mt: 2 }}>
              Ah, importante! A comunicação com os selecionados será
              <strong> por WhatsApp</strong>, então atenção na hora de preencher
              seus dados.
            </Alert>
          </Box>
          <Box sx={{ py: 1 }}>
            <SectionTitle title="Benefícios de Entrar na COMP" />
            <Divider sx={{ my: 1.5 }} />
            <Grid container spacing={1}>
              {benefits.map((benefit, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {benefit.icon}
                  <Typography variant="body2">{benefit.text}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <CVForm />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Apply
