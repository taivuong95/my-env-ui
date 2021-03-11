
import axios from 'axios';
export const API_KEY = '9cc29ecca0f48e0f260928af174aaa33';

export const getWeatherData = async (location) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const request = await axios.get(URL);
    return request;
}