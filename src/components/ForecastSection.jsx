// components/ForecastSection.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getWeatherIcon } from '../utils/weatherIcons';
import { getDayOfWeek } from '../utils/dateUtils';

const ForecastSection = ({ forecast }) => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 2, textAlign: 'center' }}>
        5-Day Forecast:
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {forecast.map((day, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Card sx={{ 
              height: '100%',
              textAlign: 'center',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
              borderRadius: 2
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {getDayOfWeek(day.dt_txt)}
                </Typography>
                {getWeatherIcon(day.weather[0].id, 50)}
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {Math.round(day.main.temp_min)}° / {Math.round(day.main.temp_max)}°
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ForecastSection;