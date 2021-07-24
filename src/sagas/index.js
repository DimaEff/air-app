import {all} from 'redux-saga/effects';

import {watcherFlights} from "./flights";


function* rootWatcher() {
    yield all([watcherFlights()])
}

export default rootWatcher;