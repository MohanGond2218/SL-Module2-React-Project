import React, {useState} from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

// manage the state 
// logic to fetch weather data

const App =() => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading]  = useState(null);
  const [error, setError]  = useState(null);
  //const API_KEY ='dd4204769cee43a70a9828642ab4271f';
  const API_KEY ='1bdcfba93ebba4f6ed281a590d3385a5';

  const fetchWeatherData = async(cityName) =>{
    try {
      setLoading(true);
      setError(null);
      // url - cityname -apikey
      const response = await axios.get
      (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

      setWeatherData(response.data); //update state with the fetched data
    } catch(error) {
      console.error(error);
      setError('City not found'); //setting msg for UI
      setWeatherData(null); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='App'>
      <h1> Weather App</h1>
      <WeatherForm onFetchWeather = {fetchWeatherData} />
      <WeatherInfo weatherData = {weatherData} loading={loading} error={error} />
    </div>
  );
};

export default App;