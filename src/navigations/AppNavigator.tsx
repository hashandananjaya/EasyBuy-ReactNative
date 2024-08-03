import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Products from '../screens/Products';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerShown: false,
          }
        }>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Products' component={Products} />
          <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
