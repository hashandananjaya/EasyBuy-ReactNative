import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const BottomBar = (props: any) => {
  function logout(): void {
    
    props.nav.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.nav.navigate('Home')}>
        <Image source={require('../../assets/images/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.nav.navigate('Products')}>
        <Image source={require('../../assets/images/products.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.nav.navigate('Cart')}>
        <Image source={require('../../assets/images/cart.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <Image source={require('../../assets/images/profile.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    position: 'absolute', // Positioning the bottom bar absolutely
    bottom: 0, // Aligning the bottom of the bottom bar with the bottom of the screen
    width: '100%', // Making the bottom bar take the full width of the screen
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default BottomBar;
