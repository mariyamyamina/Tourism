import React, { useState } from 'react';
import './home.css';

function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "f41d84dc3ff0c4d2dccd828922224f91"; 

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setError("City not found");
      }
    } catch (err) {
      setError("Error fetching weather data");
    }
    setLoading(false);
  };

  return (
    <section className="bg-container" id="home">
      <div className="slogan">
        <h3>Discover your place</h3>
        <h1>Your Dream</h1>
        <h1>Getaway is Just</h1>
        <h1>a Wave Away!</h1>
      </div>
      <div>
        <button className="button">Explore More</button>
      </div>

      <div className="weather-container">
        <h1>Live Weather Tracking</h1>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
        
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        
        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <p>{weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
