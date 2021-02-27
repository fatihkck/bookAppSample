import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function Categories() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title="Kategori"></Header>
    </SafeAreaView>
  );
}

export default Categories;
