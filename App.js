import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import MisFinanzasStackScreen from './src/screens/MisFinanzasStackScreen';
import MovimientosStackScreen from './src/screens/MovimientosStackScreen';

// Screen names
const misFinanzas = 'Mis Finanzas';
const movimientos = 'Movimientos';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={misFinanzas}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === misFinanzas) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === movimientos) {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#1E63CB',
          tabBarIncativeTintColor: '#737373',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 60 },
          headerShown: false,
        })}>
        <Tab.Screen name={misFinanzas} component={MisFinanzasStackScreen} />
        <Tab.Screen name={movimientos} component={MovimientosStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
