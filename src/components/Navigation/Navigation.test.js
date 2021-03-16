import React from 'react';
import Navigation from './Navigation';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr } from '../../utils/index';

const setup = () => shallow(<Navigation />);
describe('Navigation Component', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const navComponent = findByTestAttr(wrapper, "nav-bar");
        expect(navComponent.length).toBe(1);
    });
    test("expect to render Navigation component", () => {
        const wrapper = shallow(<Navigation />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});