import React, { useState } from 'react'
import {
  Box,
  Container,
  Divider,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  useMediaQuery,
} from '@mui/material'

import SectionContainer from '../components/SectionContainer'
import SectionTitle from '../components/SectionTitle'
import { locations } from '../../data/locations'

const About = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  const handleSelectLocation = (location) => {
    setSelectedLocation(location)
  }

  const handleViewMap = () => {
    if (selectedLocation.mapUrl) {
      window.open(selectedLocation.mapUrl, '_blank')
    }
  }

  return (
    <Container sx={{ padding: '32px' }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <SectionContainer title="Quem somos nós ?">
          <Typography variant="body1">
            A COMP é uma <strong>Empresa Júnior</strong> formada por alunos de
            graduação dos cursos do Instituto de Ciências Exatas e Informática
            da PUC Minas. Nosso principal produto é o desenvolvimento de
            softwares sob demanda, criando soluções personalizadas que atendem
            às necessidades específicas de nossos clientes.
          </Typography>
        </SectionContainer>

        <SectionContainer title="Propósito">
          <Typography variant="body1">
            Nosso propósito é oferecer soluções de{' '}
            <strong>software sob demanda</strong> com qualidade e inovação,
            atendendo às necessidades específicas dos clientes. Paralelamente,
            buscamos promover o desenvolvimento pessoal e profissional de nossos
            membros, proporcionando experiências reais de mercado que conectam a
            excelência acadêmica à prática empresarial.
          </Typography>
        </SectionContainer>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 4 }}
        sx={{
          mt: 4,
          py: 4,
          px: { xs: 2, md: 4 },
          backgroundColor: '#1a1a1a',
          borderRadius: 1,
        }}
      >
        {isMobile ? (
          <>
            <SectionTitle title="Onde Fica ?" />
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {locations.map((location) => (
                <Box
                  key={location.id}
                  onClick={() => handleSelectLocation(location)}
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.2s ease-in-out',
                    color:
                      location.id === selectedLocation.id
                        ? 'primary.main'
                        : 'inherit',
                    '&:hover': {
                      color: 'primary.dark',
                    },
                  }}
                >
                  <location.icon fontSize="large" />
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <Stack
            spacing={2}
            sx={{
              width: { xs: '100%', md: '80%' },
            }}
          >
            <Box>
              <SectionTitle title="Onde Fica ?" />
              <Divider sx={{ py: 1 }} />
              <Typography variant="body1" sx={{ mt: 1.5 }}>
                Nossos espaços estão localizados nas unidades da Pontifícia
                Universidade Católica de Minas Gerais, em Belo Horizonte.
              </Typography>
            </Box>
            {locations.map((location) => (
              <Card
                key={location.id}
                onClick={() => handleSelectLocation(location)}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  backgroundColor:
                    location.id === selectedLocation.id
                      ? 'primary.main'
                      : 'inherit',
                  transition: 'all 0.2s ease-in-out',
                  color:
                    location.id === selectedLocation.id ? '#fff' : 'inherit',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: '#fff',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pl: 2,
                  }}
                >
                  <location.icon fontSize="large" />
                </Box>

                <Divider orientation="vertical" flexItem />

                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{location.title}</Typography>
                  <Typography variant="body2">{location.address}</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}

        <Box
          sx={{
            width: { xs: '100%', md: '65%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            mt: { xs: 2, md: 0 },
            backgroundColor: 'secundary.main',
            px: 2,
            py: 1,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6">{selectedLocation.title}</Typography>
          <Box
            component="img"
            src={selectedLocation.image}
            alt={selectedLocation.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 1,
            }}
          />
          <Button variant="outlined" size="small" onClick={handleViewMap}>
            Ver no Mapa
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}

export default About
