import React from 'react';
import WeatherSearch from '../components/WeatherSearch/WeatherSearch';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/index';
import Context from '../contexts/Context';

const value = {
    getWeatherInfo: jest.fn(),
    city: 'Paris',
    loading: false
}

const setup = () => shallow(<Context.Provider value={value}><WeatherSearch /> </Context.Provider>);
describe('WeatherSearch Component if there are not city typed', () => {
    let wrapper;
    beforeEach(() => {
         wrapper = setup();
    })
    test('renders without error', () => {
        const weatherSearchComponent = findByTestAttr(wrapper, "weather-search");
        expect(weatherSearchComponent.length).toBe(0);
    })
})