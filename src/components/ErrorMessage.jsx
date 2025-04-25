// components/ErrorMessage.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ErrorMessage = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h5" component="p" sx={{ color: '#f50057' }}>
        Sorry, city not found. Please try again.
      </Typography>
    </Box>
  );
};

export default ErrorMessage;