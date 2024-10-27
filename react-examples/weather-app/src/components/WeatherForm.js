import React, {useState} from 'react';

const WeatherForm = ({ onFetchWeather }) => {

    const [city, setCity] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onFetchWeather(city);
            // call the passed function with the city name
            setCity('');
        }
    };
    return (

        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder = "Enter City"
                value = {city}
                onChange = {(e)=> setCity(e.target.value)}
            />
            <button type="submit">Get Weather</button>    
        </form>
    );
};

export default WeatherForm;