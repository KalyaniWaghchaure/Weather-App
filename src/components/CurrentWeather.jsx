// components/CurrentWeather.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { getWeatherIcon } from '../utils/weatherIcons';

const CurrentWeather = ({ currentWeather, date }) => {
  return (
    <>
      {/* City Name and Date */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {currentWeather.name}, {currentWeather.sys.country}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {date}
        </Typography>
      </Box>
      
      {/* Current Weather */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', my: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {getWeatherIcon(currentWeather.weather[0].id, 100)}
          <Typography variant="h1" sx={{ fontWeight: 'bold', ml: 2 }}>
            {Math.round(currentWeather.main.temp)}°C | °F
          </Typography>
        </Box>
        
        <Typography variant="h6" color="error" sx={{ mt: 1 }}>
          {currentWeather.weather[0].description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', mt: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WiStrongWind size={36} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {currentWeather.wind.speed} m/s
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind speed
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WiHumidity size={36} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {currentWeather.main.humidity}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Humidity
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CurrentWeather;