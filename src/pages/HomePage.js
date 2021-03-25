import React, { useState } from 'react'
import { getWeatherData } from '../apis';
import Navigation from '../components/Navigation/Navigation';
import TideSunChart from '../components/TideSunChart/TideSunChart';
import Error from '../components/UI/Error';
import WeatherDetail from '../components/WeatherDetail/WeatherDetail';
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';
import WeatherSearch from '../components/WeatherSearch/WeatherSearch';
import Context from '../contexts/Context';

const HomePage = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const setWeatherInfo = async (e) => {
    e.preventDefault();
    setLoading(true);
    const location = e.target.elements.location.value;
    if (!location) {
      setWeather(null);
      return setError("Please enter the name of the city.");
    }
    e.target.elements.location.value = "";
    try {
      const request = getWeatherData(location)
      const { data } = await request;
      setWeather(data);
      setCity(data.name);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError('Please enter valid city name.');
      setWeather(null);
      setCity(null);
    }
  }

  return (
    <div data-test="container" className='container'>
      <Context.Provider value={{ setWeatherInfo, weather, city, loading }}>
        <div className='current-weather-layout'>
          <Navigation />
          <WeatherSearch />
          {weather && <WeatherDetail />}
          {error && <Error error={error} />}
          <WeatherInfo />
        </div>
        <div className='chart-layout'>
          <TideSunChart />
        </div>
      </Context.Provider>
    </div>
  );
}

export default HomePage;