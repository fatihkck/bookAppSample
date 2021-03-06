import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function Categories({navigation}) {
  return (
    <SafeAreaView>
      <Header title="Kategoriler" navigation={navigation}></Header>
      <View>
        <Text>Kategori</Text>
      </View>
    </SafeAreaView>
  );
}

export default Categories;
