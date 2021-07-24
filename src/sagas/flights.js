import {call, put, takeEvery} from 'redux-saga/effects';

import {flightAPI} from "../api/api";
import {FETCH_FLIGHTS, setFlights} from "../redux/flights_reducer";


function* workerGetFlights() {
    const data = yield call(() => flightAPI.getFlights('RU', 'RUB', 'en-US', 'SVO-sky', 'JFK-sky', '2021-07'));
    yield put(setFlights(data.data.Quotes));
}

export function* watcherFlights() {
    yield takeEvery(FETCH_FLIGHTS, workerGetFlights)
}