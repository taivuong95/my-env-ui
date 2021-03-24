import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import weatherListReducer from './reducers/weatherList';
import citiesReducer from './reducers/cities';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    weatherList: weatherListReducer,
    cities: citiesReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {
    const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}