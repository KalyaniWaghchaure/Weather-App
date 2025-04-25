// components/SearchBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import axios from 'axios';

const SearchBar = ({ setCity, setCurrentWeather, setForecast, setError, setLoading, setDate }) => {
  const [searchCity, setSearchCity] = useState('');
  const API_KEY = '037bb41b2e48484bb26fbbb9131f0526';

  const handleCityChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherData();
    }
  };

  const fetchWeatherData = async () => {
    if (!searchCity.trim()) return;
    
    setLoading(true);
    setError(false);
    
    try {
      // Fetch current weather data
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;
      const currentResponse = await axios.get(currentWeatherUrl);
      
      // Fetch 5-day forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API_KEY}&units=metric`;
      const forecastResponse = await axios.get(forecastUrl);
      
      // Process 5-day forecast data - get one forecast per day
      const dailyData = forecastResponse.data.list.filter((reading, index) => 
        // Filter to get data for midday each day
        index % 8 === 4
      ).slice(0, 5);
      
      // Set the current date
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setDate(today.toLocaleDateString('en-US', options));
      
      // Update state with weather data
      setCity(searchCity);
      setCurrentWeather(currentResponse.data);
      setForecast(dailyData);
      setError(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', mb: 4 }}>
      <TextField
        fullWidth
        placeholder="enter city name"
        variant="outlined"
        value={searchCity}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px 0 0 4px',
          }
        }}
      />
      <IconButton 
        sx={{ 
          backgroundColor: '#87CEEB', 
          borderRadius: '0 4px 4px 0',
          '&:hover': {
            backgroundColor: '#5CACEE',
          }
        }} 
        aria-label="search"
        onClick={fetchWeatherData}
      >
        <SearchIcon sx={{ color: 'white' }}/>
      </IconButton>
    </Box>
  );
};

export default SearchBar;