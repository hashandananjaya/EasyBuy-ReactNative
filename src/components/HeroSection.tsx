import React from 'react';
import { View, Image, Text, Button } from 'react-native';

const HeroSection = (prop:any) => {
  return (
    <View style={{ padding: 16 }}>
      <Image
        source={{ uri: 'https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8fDA%3D' }}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
      />
      <View style={{ position: 'absolute', top: 100, left: 30 }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
          Welcome to EasyBuy!
        </Text>
        <Text style={{ color: '#a7a7a7', fontSize: 16 }}>
        Everything you are looking for in one place
        </Text>
        <Button title="Shop Now" onPress={() => { prop.nav.navigate('Products') }} />
      </View>
    </View>
  );
};

export default HeroSection;
