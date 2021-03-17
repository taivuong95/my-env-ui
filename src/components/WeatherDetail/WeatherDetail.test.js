import React from 'react';
import WeatherDetail from './WeatherDetail';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr } from '../../utils/index';
import Context from '../../contexts/Context';
import Loader from '../UI/Loader';

const value = {
    weather: {},
    loading: true
}

describe('WeatherDetail Component', () => {
    test("expect to render WeatherDetail component", () => {
        const wrapper = mount(<Context.Provider value={value}><WeatherDetail /> </Context.Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const wrapper = mount(<Context.Provider value={value}><WeatherDetail /> </Context.Provider>)
        const weatherDetailComponent = findByTestAttr(wrapper, "weather-detail");
        expect(weatherDetailComponent.length).toBe(0);
    });
    test(" render a loading before api call success(loading is true)", () => {
        const wrapper = mount(<Context.Provider value={value}><Loader /> </Context.Provider>)
        expect(wrapper.find(".loader").exists()).toBeTruthy();
    });

    const setup = ({ weather, loading }) => {
        loading = loading || false;

        return mount(
            <Context.Provider value={{ weather, loading }}>
                <WeatherDetail />
            </Context.Provider>
        )
    }

    test('correctly render loading', () => {
        const wrapper = setup(true);
        expect(wrapper.contains(<Loader />));
    });
    // test('correctly render weather humidity', () => {
    //     const wrapper = setup({});
    //     const humid = findByTestAttr(wrapper, 'humidity');
    //     expect(humid.text()).toBe('81');
    // })

})