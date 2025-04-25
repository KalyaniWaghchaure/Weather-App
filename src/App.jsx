// App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SearchBar from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';
import ForecastSection from './components/ForecastSection';
import ErrorMessage from './components/ErrorMessage';
import LoadingIndicator from './components/LoadingIndicator';
import './App.css';

const backgroundImageUrl = 'https://t4.ftcdn.net/jpg/04/61/23/23/360_F_461232389_XCYvca9n9P437nm3FrCsEIapG4SrhufP.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <SearchBar 
              setCity={setCity}
              setCurrentWeather={setCurrentWeather}
              setForecast={setForecast}
              setError={setError}
              setLoading={setLoading}
              setDate={setDate}
            />

            {error && <ErrorMessage />}
            
            {loading && <LoadingIndicator />}
            
            {currentWeather && !error && !loading && (
              <>
                <CurrentWeather 
                  currentWeather={currentWeather} 
                  date={date} 
                />
                
                {forecast.length > 0 && (
                  <ForecastSection forecast={forecast} />
                )}
              </>
            )}
            
            {!currentWeather && !error && !loading && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6">
                  Enter a city name to get weather information
                </Typography>
              </Box>
            )}
          </Paper>
        </Container>
        
        <Box sx={{ mt: 3, textAlign: 'center', color: '#fff' }}>
          <Typography variant="body2" sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            Coded by You, Open sourced on GitHub. Hosted on Netlify
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;