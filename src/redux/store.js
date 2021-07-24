import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootWatcher from "../sagas";


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers([]);

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);