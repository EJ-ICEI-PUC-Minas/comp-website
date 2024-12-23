import React from 'react'
import { Box, Typography } from '@mui/material'

const SectionTitle = ({ title, barColor = 'primary.main', sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        ...sx,
      }}
    >
      {/* RECTANGLE  */}
      <Box
        sx={{
          width: '4px',
          height: '24px',
          backgroundColor: barColor,
        }}
      />
      {/* TITLE  */}
      <Typography variant="h5">{title}</Typography>
    </Box>
  )
}

export default SectionTitle
