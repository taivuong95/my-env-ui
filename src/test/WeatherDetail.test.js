import React from 'react';
import WeatherDetail from '../components/WeatherDetail/WeatherDetail';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../utils/index';
import Context from '../contexts/Context';
import Loader from '../components/UI/Loader';

const value = {
    getWeatherInfo: jest.fn(),
    loading: true
}

describe('WeatherDetail Component', () => {
    test('renders without error', () => {
        const wrapper = mount(<Context.Provider value={value}><WeatherDetail /> </Context.Provider>)
        const weatherDetailComponent = findByTestAttr(wrapper, "weather-detail");
        expect(weatherDetailComponent.length).toBe(0);
    });
    test(" render a loading before api call success(loading is true)", () => {
        const wrapper = mount(<Context.Provider value={value}><Loader /> </Context.Provider>)
        expect(wrapper.find(".loader").exists()).toBeTruthy();
    });

})