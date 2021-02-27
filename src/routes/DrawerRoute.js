import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

function DrawerRoute() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Ana Sayfa" component={HomeStack} />
        <Drawer.Screen name="Hakkında" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerRoute;
