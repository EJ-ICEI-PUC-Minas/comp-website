import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'

const ProfileCard = ({
  name,
  surname,
  role,
  imageProfile,
  course,
  description,
  instagramUrl,
  githubUrl,
  linkedinUrl,
}) => {
  const [open, setOpen] = useState(false)

  const getInitials = () => {
    const initialName = name?.[0]?.toUpperCase() || ''
    const initialSurname = surname?.[0]?.toUpperCase() || ''
    return `${initialName}${initialSurname}`
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Card
        sx={{
          cursor: 'pointer',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 6,
          },
        }}
        onClick={handleOpen}
        variant="outlined"
      >
        <CardHeader
          avatar={
            imageProfile ? (
              <Avatar src={imageProfile} alt={`${name} ${surname}`} />
            ) : (
              <Avatar>{getInitials()}</Avatar>
            )
          }
          title={`${name} ${surname}`}
          subheader={role}
        />
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{`${name} ${surname}`}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText component="div">
            <Typography variant="subtitle1">Curso: {course}</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
              {instagramUrl && (
                <IconButton
                  component="a"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
              )}
              {githubUrl && (
                <IconButton
                  component="a"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHub />
                </IconButton>
              )}
              {linkedinUrl && (
                <IconButton
                  component="a"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              )}
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProfileCard
