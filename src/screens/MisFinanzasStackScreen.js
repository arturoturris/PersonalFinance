import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MisFinanzasScreen from './MisFinanzasScreen';
import IngresosScreen from './IngresosScreen';
import GastosScreen from './GastosScreen'
import AhorroScreen from './AhorroScreen'

const Stack = createStackNavigator();

const MisFinanzasStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Mis Finanzas" component={MisFinanzasScreen} />
    <Stack.Screen name="Ingresos" component={IngresosScreen} />
    <Stack.Screen name="Gastos" component={GastosScreen} />
    <Stack.Screen name="Ahorro" component={AhorroScreen} />
  </Stack.Navigator>
);

export default MisFinanzasStackScreen;
