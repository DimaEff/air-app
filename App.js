import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {flightAPI} from "./src/api/api";


export default function App() {
  const press = async () => {
    const res = await flightAPI.getFlights('RU', 'RUB', 'en-US', 'SVO-sky', 'JFK-sky', '2021-07')
    console.log(res)
  }

  return (
    <View style={styles.container}>
      <Button title={'test'} onPress={press}>test</Button>
    </View>
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
