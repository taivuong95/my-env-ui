import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import HomePage from "./HomePage";
import { findByTestAttr } from "../utils";

const setup = () => shallow(<HomePage />);
describe("HomePage Component", () => {
  test("expect to render HomePage component", () => {
    const wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("renders without error", () => {
    const wrapper = setup();
    const homepageComponent = findByTestAttr(wrapper, "container");
    expect(homepageComponent.length).toBe(1);
  });
});