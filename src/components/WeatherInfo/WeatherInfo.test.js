import React from 'react';
import WeatherInfo from './WeatherInfo';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr } from '../../utils/index';

const setup = () => shallow(<WeatherInfo />);
describe('WeatherInfo Component', () => {
    test("expect to render WeatherInfo component", () => {
        const wrapper = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const wrapper = setup();
        const navComponent = findByTestAttr(wrapper, "weather-info-layout");
        expect(navComponent.length).toBe(1);
    })
})