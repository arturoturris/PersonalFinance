import React from 'react';

import { Text, ScrollView, StyleSheet } from 'react-native';

const IngresosScreen = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.text}>Ingresos</Text>
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

export default IngresosScreen;
