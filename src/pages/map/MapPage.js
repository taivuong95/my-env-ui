
import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import WeatherPage from '../PageHOC';
import Map from './Map';
import Carousel from '../../components/Carousel/Carousel';
import WeatherCard from '../../components/WeatherCard/WeatherCard';




const MapPage = props => {
    const { list, city, request, error, getWeather } = props;
    return (
        <Fragment>
            <Map onClick={getWeather} popupText={city.name} coord={city.coord} />
            <Carousel>
                {list.map((day) => <WeatherCard day={day} key={day.date} />)}
            </Carousel>
        </Fragment>
    );
};

export default WeatherPage(MapPage);