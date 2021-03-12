import React from 'react';
import WeatherInfo from '../WeatherInfo';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('WeatherInfo Component', () => {

    it("expect to render WeatherInfo component", () => {
        const wrapper = shallow(<WeatherInfo />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
