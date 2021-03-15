import React from 'react';
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/index';

const setup = () => shallow(<WeatherInfo />);
describe('WeatherInfo Component', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const navComponent = findByTestAttr(wrapper, "weather-info-layout");
        expect(navComponent.length).toBe(1);
    })
})