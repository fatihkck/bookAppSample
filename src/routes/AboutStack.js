import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../pages/About'

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
  );
}

export default AboutStack;
