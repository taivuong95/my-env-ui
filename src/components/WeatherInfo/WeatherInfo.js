import React from 'react';

const WeatherInfo = () => {
  return (
    <div data-test="weather-info-layout" className='weather-info-layout'>
      <div className='weather-info__item'>
        <div className='weather-info__item--title'>PSI</div>
        <div className='weather-info__item--number'>23</div>
        <div className='weather-info__item--review'>Good</div>
      </div>
      <div className='weather-info__item'>
        <div className='weather-info__item--title'>RAIN</div>
        <div className='weather-info__item--number-nobg'>0</div>
        <div className='weather-info__item--review'>mm</div>
      </div>
      <div className='weather-info__item'>
        <div className='weather-info__item--title'>DENGUE</div>
        <div className='weather-info__item--circle'></div>
        <div className='weather-info__item--review'></div>
      </div>
      <div className='weather-info__item'>
        <div className='weather-info__add-btn'></div>
        <div className='weather-info__add-txt'>Add</div>
      </div>
    </div>
  )
}

export default WeatherInfo;