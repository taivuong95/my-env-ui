import React from 'react';
import Navigation from '../Navigation.js'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Navigation Component', () => {

    it("expect to render Navigation component", () => {
        const wrapper = shallow(<Navigation />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})