import React from 'react';
import TideSunChart from './TideSunChart';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr } from '../../utils/index';

const setup = () => shallow(<TideSunChart />);
describe('TideSunChart Component', () => {
    test("expect to render Navigation component", () => {
        const wrapper = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const wrapper = setup();
        const chartComponent = findByTestAttr(wrapper, "chart");
        expect(chartComponent.length).toBe(1);
    })
})