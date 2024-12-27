import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider, Toolbar } from '@mui/material'

import Header from './components/Header'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Apply from './pages/Apply'
import ProjectSubmission from './pages/ProjectSubmission'

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
        <Header />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/torna-se-parte" element={<Apply />} />
          <Route path="/desenvolva" element={<ProjectSubmission />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
