import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useDispatch, Provider, useSelector} from "react-redux";

import store from './src/redux/store';
import Flights from "./src/components/flights/Flights";


export default function App() {
  return (
      <Provider store={store}>
        <View>
          <Flights />
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
