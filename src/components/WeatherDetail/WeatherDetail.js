import React from 'react';
import './WeatherDetail.scss'

const WeatherDetail = () => {
    return (
        <div className='weather-detail'>
          <div className='weather-detail__block'>
            <div className='weather-detail__icon--cloud'></div>
            <div className='weather-detail__info'>
              <div className='weather-detail__info--weather'>Cloudy</div>
              <div className='weather-detail__info--status'>
                <span className='weather-detail__info--temp-status'>
                  29.2 C
                </span>
                <span className='weather-detail__info--humid-status'>73%</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default WeatherDetail