import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function Library() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title="Kütüphane"></Header>
    </SafeAreaView>
  );
}

export default Library;
