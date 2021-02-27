import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Home, Categories, Library} from '../pages';
import {colors, fonts} from '../consts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'box';
          } else if (route.name === 'Library') {
            iconName = 'sliders';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.text,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Ana Sayfa',
        }}
        component={Home}
      />
      <Tab.Screen
        name="Categories"
        options={{
          tabBarLabel: 'Kategoriler',
        }}
        component={Categories}
      />
      <Tab.Screen
        name="Library"
        options={{
          tabBarLabel: 'Kütüphane',
        }}
        component={Library}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
 
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="tab" component={Tabs} />
      </Stack.Navigator>

  );
}

export default HomeStack;
