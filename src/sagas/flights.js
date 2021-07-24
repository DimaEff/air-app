import {call, put, takeEvery} from 'redux-saga/effects';

import {setAsyncFlights, setFlights} from "../redux/flights_reducer";
import {flightAPI} from "../api/api";
import {SET_ASYNC_FLIGHTS} from '../redux/flights_reducer';


function* workerGetFlights() {
    const data = yield call(lightAPI.getFlights('RU', 'RUB', 'en-US', 'SVO-sky', 'JFK-sky', '2021-07'));
    yield put(setFlights(data.data.Quotes));
}

function* watcherFlights() {
    yield takeEvery(SET_ASYNC_FLIGHTS, workerGetFlights)
}