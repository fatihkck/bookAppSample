import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../consts';

function Header({title, navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
    console.log('open menu');
  };

  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Icon
            name={'menu'}
            color={colors.header}
            size={24}
            onPress={openMenu}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name={'search'} color={colors.header} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.header,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
