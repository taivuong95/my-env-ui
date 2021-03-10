import React from 'react';
import './WeatherInfo.scss';

const WeatherInfo = () => {
    return (
        <div className='weather-info-layout'>
          <div className='weather-info__item'>
            <div class='weather-info__item--title'>PSI</div>
            <div class='weather-info__item--number'>23</div>
            <div class='weather-info__item--review'>Good</div>
          </div>
          <div className='weather-info__item'>
            <div class='weather-info__item--title'>RAIN</div>
            <div class='weather-info__item--number-nobg'>0</div>
            <div class='weather-info__item--review'>mm</div>
          </div>
          <div className='weather-info__item'>
            <div class='weather-info__item--title'>DENGUE</div>
            <div class='weather-info__item--circle'></div>
            <div class='weather-info__item--review'></div>
          </div>
          <div className='weather-info__item'>
            <div class='weather-info__add-btn'></div>
            <div class='weather-info__add-txt'>Add</div>
          </div>
        </div>
    )
}

export default WeatherInfo;