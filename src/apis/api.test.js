import axios from "axios";
import { API_KEY, getWeatherData } from "./index";
import { mockData } from './mockData'
jest.mock("axios");
describe("fetchData", () => {
  test("fetches successfully data from API", async () => {

    const resp = { mockData };
    axios.get.mockImplementationOnce(() => Promise.resolve(resp));

    await expect(getWeatherData("Paris")).resolves.toEqual(resp);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}&units=metric`
    );
  });
  test("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getWeatherData("Paris")).rejects.toThrow(errorMessage);
  });
});
