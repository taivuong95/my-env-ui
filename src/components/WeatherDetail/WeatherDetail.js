import React, { useContext } from 'react';

import Context from '../../contexts/Context';
import Loader from '../UI/Loader';

const WeatherDetail = () => {
  const { weather, loading } = useContext(Context);
  return (
    <>
      {loading ? <Loader /> : <div data-test="weather-detail" className='weather-detail'>
        <div className='weather-detail__block'>
          <img alt="icon" src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} />
          <div className='weather-detail__info'>
            <div className='weather-detail__info--weather'>{weather?.weather[0]?.main}</div>
            <div className='weather-detail__info--status'>
              <span className='weather-detail__info--temp-status'>
                {(weather?.main?.temp)} C
                </span>
              <span data-test="humidity" className='weather-detail__info--humid-status'>{weather?.main?.humidity}%</span>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default WeatherDetail