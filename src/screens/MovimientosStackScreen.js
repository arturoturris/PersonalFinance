import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MovimientosScreen from './MovimientosScreen';

const Stack = createStackNavigator();

const MovimientosStackScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Movimientos" component={MovimientosScreen} />
  </Stack.Navigator>
);

export default MovimientosStackScreen;
