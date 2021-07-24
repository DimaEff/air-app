export const FETCH_FLIGHTS = 'flights_reducer/FETCH_FLIGHTS';
const SET_FLIGHTS = 'flights_reducer/SET_FLIGHTS';

const initialState = {
    flights: [],
}

const flightsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS:
            return {
                ...state,
                flights: action.payload,
            }

            default:
                return state;
    }
}

export const fetchFlights = () => ({type: FETCH_FLIGHTS});
export const setFlights = (payload) => ({type: SET_FLIGHTS, payload});

export default flightsReducer;