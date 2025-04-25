// components/LoadingIndicator.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingIndicator = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgress color="primary" sx={{ mb: 2 }} />
      <Typography>Loading weather data...</Typography>
    </Box>
  );
};

export default LoadingIndicator;