import React from 'react';

import { Text, Button, ScrollView, StyleSheet } from 'react-native';

const MisFinanzasScreen = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.text}>Mis Finanzas</Text>
    <Button title="Ingresos" onPress={() => navigation.navigate('Ingresos')} />
    <Button title="Gastos" onPress={() => navigation.navigate('Gastos')} />
    <Button title="Ahorro" onPress={() => navigation.navigate('Ahorro')} />
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

export default MisFinanzasScreen;
