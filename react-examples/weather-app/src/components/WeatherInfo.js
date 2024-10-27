import React from 'react';

const WeatherInfo = ({ weatherData, loading, error}) => {
     
    if(loading) return <p> Loading.....</p>;
    if (error) return <p style = {{color : 'red'}}> {error} </p>
    if (!weatherData) return null;
    return (
        <div classname = "weather-info" >
            <h2> {weatherData.name}</h2>
            <p> Temperature : {weatherData.main.temp}deg C </p>
            <p> Weather: {weatherData.weather[0].description}</p>
            <p> Humidity: {weatherData.main.humidity}%</p>
            <p> Wind Speed : {weatherData.main.speed} m/s</p>
        </div>
    );
};

export default WeatherInfo;