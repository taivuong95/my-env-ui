import axios from 'axios';
import API from './API';

const APP_ID = '093c63d1d6dd2f0f77c6f14d91a19042';

class WeatherService {
    static getWeatherByPosition(requestParams, cancelToken) {
        const params = {
            cnt: 10,
            appid: APP_ID,
            units: 'metric',
            ...requestParams
        };
        return axios.get(API.forecastDaily, {
            params,
            cancelToken,
            transformResponse: data => {
                let { city, list = [] } = JSON.parse(data);

                list = list.map(day => {
                    return {
                        date: day.dt,
                        humidity: day.humidity,
                        speed: day.speed,
                        temp: day.temp,
                        main: {
                            icon: day.weather[0].icon,
                            description: day.weather[0].description
                        }
                    };
                });
                return { city, list };
            }
        });
    }
    static findCities(q, cancelToken) {
        const params = {
            q,
            cnt: 10,
            appid: APP_ID
        };

        return axios.get(API.find, {
            params,
            cancelToken
        });
    }
}

export default WeatherService;