export const SET_ASYNC_FLIGHTS = 'flights_reducer/SET_ASYNC_FLIGHTS';
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

export const setAsyncFlights = () => ({type: SET_ASYNC_FLIGHTS});
export const setFlights = (payload) => ({type: SET_FLIGHTS, payload});

export default flightsReducer;