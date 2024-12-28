import React from 'react'
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Button,
  Stack,
} from '@mui/material'

import backgroundIMG from '../assets/background.png'

// COMPONENTS
import FAQ from '../components/FAQ'

// ICONS
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'
import AppShortcutIcon from '@mui/icons-material/AppShortcut'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

const services = [
  {
    title: 'Sistemas Web',
    icon: <BrandingWatermarkIcon fontSize="large" />,
    description: 'Desenvolvemos sites e sistemas web sob medida.',
  },
  {
    title: 'Aplicativos Mobile',
    icon: <AppShortcutIcon fontSize="large" />,
    description: 'Criamos aplicativos nativos ou multiplataforma.',
  },
  {
    title: 'UI & UX Design',
    icon: <DesignServicesIcon fontSize="large" />,
    description: 'Projetamos interfaces modernas e intuitivas.',
  },
  {
    title: 'Automação de Processos',
    icon: <SettingsSuggestIcon fontSize="large" />,
    description: 'Automatizamos tarefas para aumentar a eficiência.',
  },
]

const Home = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          minHeight: '100vh',
          color: '#fff',
          backgroundImage: backgroundIMG,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 4,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Conheça a COMP
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
          A empresa júnior de computação da PUC Minas
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#0056FF',
              '&:hover': { backgroundColor: '#003FC5' },
            }}
          >
            Nossos Projetos
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#0056FF',
              color: '#0056FF',
              '&:hover': {
                backgroundColor: '#003FC5',
                color: '#fff',
              },
            }}
          >
            Nossos Valores
          </Button>
        </Stack>
      </Box>
      <Box
        component="section"
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          py: 8,
        }}
      >
        <Container>
          <Typography variant="h5" align="center">
            Nossos serviços
          </Typography>

          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            O que fazemos de melhor.
          </Typography>

          <Typography
            variant="subtitle2"
            align="center"
            sx={{ maxWidth: 600, margin: '0 auto', pb: 4 }}
          >
            Oferecemos soluções em tecnologia para transformar ideias em
            realidade. Nosso foco é criar experiências digitais que impulsionam
            negócios e entregam resultados.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: '#1c1c1c',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: 4,
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ padding: 2, flex: 2 }}>
            <FAQ />
          </Box>
          <Paper sx={{ padding: 2, flex: 1 }}>
            <img src="" alt="graph" />
          </Paper>
        </Box>
      </Container>
    </>
  )
}

export default Home
