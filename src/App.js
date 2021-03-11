import { useEffect, useState } from 'react';
import "./App.css";
import Navigation from './components/Navigation/Navigation';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import TideSunChart from './components/TideSunChart/TideSunChart';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { getWeatherData } from './apis';
import Context from './contexts/Context';
import Error from './components/UI/Error'

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const getWeatherInfo = async (e) => {
    e.preventDefault();
    setLoading(true);
    const location = e.target.elements.location.value;
    if (!location) {
      setLoading(true)
      setWeather(null);
      return setError("Please enter the name of the city.");
    }
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
  useEffect(() => {

  }, [])
  return (
    <div className='container'>
      <Context.Provider value={{ getWeatherInfo, weather, city, loading }}>
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

export default App;
