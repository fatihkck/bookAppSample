import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function Library({navigation}) {
  return (
    <SafeAreaView>
      <Header title="Kütüphane" navigation={navigation}></Header>
      <View>
        <Text>Kütüphane</Text>
      </View>
    </SafeAreaView>
  );
}

export default Library;
