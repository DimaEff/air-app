import React from 'react';
import {Button, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {fetchFlights} from "../../redux/flights_reducer";


const Flights = () => {
    const dispatch = useDispatch();
    const flights = useSelector(state => state.flights.flights);

    const press = () => {
        dispatch(fetchFlights());
    }

    const quotes = flights.map(q => <Text>{q.MinPrice}</Text>)

    return (
        <View>
            <Button title={'test'} onPress={press}>test</Button>
            {quotes || 'No flights'}
        </View>
    );
};

export default Flights;
