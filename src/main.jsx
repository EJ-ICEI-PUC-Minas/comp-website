import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider, Toolbar, Box} from '@mui/material'

import Header from './components/Header'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Apply from './pages/Apply'
import ProjectSubmission from './pages/ProjectSubmission'
import Footer from './components/Footer'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // garante altura total
          }}
        >
          <Header />
          {/* Toolbar separa o conteúdo do topo, se necessário */}
          <Toolbar />

          {/* Main onde entrarão as páginas (rotas) */}
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/torna-se-parte" element={<Apply />} />
              <Route path="/desenvolva" element={<ProjectSubmission />} />
            </Routes>
          </Box>

          {/* Footer no final da coluna */}
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
