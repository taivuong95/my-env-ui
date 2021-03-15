import React from 'react';
import TideSunChart from '../components/TideSunChart/TideSunChart';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/index';

const setup = () => shallow(<TideSunChart />);
describe('TideSunChart Component', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const chartComponent = findByTestAttr(wrapper, "chart");
        expect(chartComponent.length).toBe(1);
    })
})