import React from 'react';

import { Text, ScrollView, StyleSheet } from 'react-native';

const MovimientosScreen = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.text}>Movimientos</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default MovimientosScreen;
