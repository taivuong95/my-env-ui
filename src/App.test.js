import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import { findByTestAttr } from "./utils/index";
import App from "./App";

const setup = () => shallow(<App />);
describe("App Component", () => {
  test("expect to render App component", () => {
    const wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "container");
    expect(appComponent.length).toBe(1);
  });
});
