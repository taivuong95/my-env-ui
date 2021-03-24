import { all, fork } from 'redux-saga/effects';
import fetchCitiesWatcher from './cities';
import fetchWeatherListWatcher from './weatherList';

export default function* rootSaga() {
    yield all([
        fork(fetchWeatherListWatcher),
        fork(fetchCitiesWatcher)
    ])
}
