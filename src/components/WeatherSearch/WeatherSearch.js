import React, { useContext } from 'react';
import Context from '../../contexts/Context'
import Loader from '../UI/Loader';

const WeatherSearch = () => {
    const { getWeatherInfo, city, loading } = useContext(Context)
    return (
        <div className="weather-search">
            {loading ? <Loader /> : <div className="weather-search--city">{city || 'Please enter the name of the city to get started!'}</div>}
            <form onSubmit={getWeatherInfo} className="weather-search__form" >
                <input name="location" placeholder="Type the city" autoComplete="off" className="weather-search__input" type="text" />
                <div className="weather-search__submit">
                    <button className="weather-search__button">&rarr;</button>
                </div>
            </form>
        </div>
    )
}

export default WeatherSearch