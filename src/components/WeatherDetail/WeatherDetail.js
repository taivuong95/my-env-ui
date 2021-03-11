import React, { useContext } from 'react';
import './WeatherDetail.scss';

import Context from '../../contexts/Context';
import Loader from '../UI/Loader';

const WeatherDetail = () => {
  const { weather, loading } = useContext(Context);
  console.log(weather);
  return (
    <>
      {loading ? <Loader /> : <div className='weather-detail'>
        <div className='weather-detail__block'>
          {/*<div className='weather-detail__icon--cloud'></div>*/}
          <img alt="icon" src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} />
          <div className='weather-detail__info'>
            <div className='weather-detail__info--weather'>{weather?.weather[0]?.main}</div>
            <div className='weather-detail__info--status'>
              <span className='weather-detail__info--temp-status'>
                {(weather?.main?.temp)} C
                </span>
              <span className='weather-detail__info--humid-status'>{weather?.main?.humidity}%</span>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default WeatherDetail