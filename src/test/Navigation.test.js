import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/index';

const setup = () => shallow(<Navigation />);
describe('Navigation Component', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const navComponent = findByTestAttr(wrapper, "nav-bar");
        expect(navComponent.length).toBe(1);
    })
})