import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function Home({navigation}) {
  console.log('navigation');
  console.log(navigation);
  return (
    <SafeAreaView>
      <Header title="Ana Sayfa" navigation={navigation}></Header>
      <View>
        <Text>Ana Sayfa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
