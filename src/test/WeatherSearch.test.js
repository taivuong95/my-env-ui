import React from 'react';
import WeatherSearch from '../components/WeatherSearch/WeatherSearch';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../utils/index';
import Context from '../contexts/Context';
import Loader from '../components/UI/Loader';

const value = {
    getWeatherInfo: jest.fn(),
    city: 'Paris',
    loading: true
}



describe('WeatherSearch Component', () => {
    test('renders without error', () => {
        const wrapper = mount(<Context.Provider value={value}><WeatherSearch /> </Context.Provider>)
        const weatherSearchComponent = findByTestAttr(wrapper, "weather-search");
        expect(weatherSearchComponent.length).toBe(1);
    });
    test(" render a loading before api call success(loading is true)", () => {
        const wrapper = mount(<Context.Provider value={value}><Loader /> </Context.Provider>)
        expect(wrapper.find(".loader").exists()).toBeTruthy();
    });

})