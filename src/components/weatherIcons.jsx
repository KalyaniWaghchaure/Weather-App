// utils/weatherIcons.js
import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiDayCloudy } from 'react-icons/wi';

export const getWeatherIcon = (weatherCode, size = 80) => {
  // Weather condition codes: https://openweathermap.org/weather-conditions
  if (weatherCode >= 200 && weatherCode < 300) return <WiThunderstorm size={size} color="#737373" />;
  if (weatherCode >= 300 && weatherCode < 400) return <WiRain size={size} color="#737373" />;
  if (weatherCode >= 500 && weatherCode < 600) return <WiRain size={size} color="#737373" />;
  if (weatherCode >= 600 && weatherCode < 700) return <WiSnow size={size} color="#737373" />;
  if (weatherCode >= 700 && weatherCode < 800) return <WiFog size={size} color="#737373" />;
  if (weatherCode === 800) return <WiDaySunny size={size} color="#FFD700" />;
  if (weatherCode === 801) return <WiDayCloudy size={size} color="#737373" />;
  return <WiCloudy size={size} color="#737373" />;
};