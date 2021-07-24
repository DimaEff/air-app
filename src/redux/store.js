import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootWatcher from "../sagas";
import flightsReducer from "./flights_reducer";


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    flights: flightsReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;