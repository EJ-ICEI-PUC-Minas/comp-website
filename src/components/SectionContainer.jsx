import React from 'react'
import { Box, Divider, Paper } from '@mui/material'
import SectionTitle from './SectionTitle'

const SectionContainer = ({
  title,
  barColor,
  titleBgColor = 'transparent',
  contentPadding = { xs: 1, md: 2 },
  children,
}) => {
  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          padding: { xs: 1, md: 2 },
          backgroundColor: titleBgColor,
        }}
      >
        <SectionTitle title={title} barColor={barColor} />
      </Box>

      <Divider />

      <Box sx={{ p: contentPadding }}>{children}</Box>
    </Paper>
  )
}

export default SectionContainer
