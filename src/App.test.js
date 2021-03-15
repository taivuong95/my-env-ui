import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./utils/index";
import App from "./App";
import { mockData } from "./test/mockData";
import { getWeatherData } from "./apis";
import axios from "axios";
jest.mock("axios");
const updateInput = (wrapper, instance, newValue) => {
  const input = wrapper.find(instance);
  input.simulate("change", {
    currentTarget: { value: newValue },
  });
  return wrapper.find(instance);
};
const setup = () => shallow(<App />);
describe("App Component", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "container");
    expect(appComponent.length).toBe(1);
  });

  test("submits the form", () => {
    // const resp = { mockData };
    // axios.get.mockImplementationOnce(() => Promise.resolve(resp));
    // const wrapper = setup();
    // updateInput(wrapper, '[data-test="city"]', "Paris");

    // wrapper
    //   .find('[data-test="weather-search__form"]')
    //   .simulate("submit", { preventDefault: () => {} });

    // expect(getWeatherData).toHaveBeenCalledWith("Paris");
  });
});
