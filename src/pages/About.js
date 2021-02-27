import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function About({navigation}) {
  return (
    <SafeAreaView>
      <Header title="Hakkında" navigation={navigation}></Header>
      <View>
        <Text>Hakkında</Text>
      </View>
    </SafeAreaView>
  );
}

export default About;
