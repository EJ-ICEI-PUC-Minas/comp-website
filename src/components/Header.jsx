import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNavigate = (path) => {
    navigate(path)
    handleClose()
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  }

  const activeStyle = {
    fontWeight: 'bold',
    borderBottom: '2px solid rgb(190, 178, 178)',
  }

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.04)',
            },
          }}
          onClick={() => handleNavigate('/')}
        >
          <img
            src="/full-logo.svg"
            alt="Logo"
            style={{
              height: 'auto',
              width: '120px',
            }}
          />
        </Box>

        {/* LINKS */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {['/sobre', '/equipe', '/torna-se-parte', '/desenvolva'].map(
            (path, index) => (
              <Button
                key={index}
                component={NavLink}
                to={path}
                style={({ isActive }) =>
                  isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                }
                color={path === '/desenvolva' ? 'primary' : 'inherit'}
                variant={path === '/desenvolva' ? 'contained' : 'text'}
              >
                {path === '/sobre' && 'Sobre'}
                {path === '/equipe' && 'Equipe'}
                {path === '/torna-se-parte' && 'Torna-se Parte'}
                {path === '/desenvolva' && 'Desenvolva'}
              </Button>
            )
          )}
        </Box>

        {/* MENU HAMBURGER */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* MENU MOBILE*/}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
          {['/sobre', '/equipe', '/torna-se-parte', '/desenvolva'].map(
            (path, index) => (
              <MenuItem
                key={index}
                onClick={() => handleNavigate(path)}
                sx={({ isActive }) => (isActive ? activeStyle : {})}
              >
                {path === '/sobre' && 'Sobre'}
                {path === '/equipe' && 'Equipe'}
                {path === '/torna-se-parte' && 'Torna-se Parte'}
                {path === '/desenvolva' && 'Desenvolva'}
              </MenuItem>
            )
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
