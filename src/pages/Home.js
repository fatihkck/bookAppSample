import React from 'react';
import {View, Text,StyleSheet,StatusBar,SafeAreaView} from 'react-native';
import {colors, fonts} from '../consts';
import {Header} from '../components';


function Home() {
  return (
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
        <Header title='Ana Sayfa'></Header>
        <View>
          <Text>Ana Sayfa</Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default Home;
