import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';

// Define sample categories data
const categories = [
  { id: 1, name: 'Free Delivery', image: 'https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg', price: 10 },
  { id: 2, name: 'Live', image: 'https://previews.123rf.com/images/deimosz/deimosz1502/deimosz150200373/36498538-orange-24-7-call-center-icon-badge-label-or-sticker-for-customer-service-support-or-crm-concept.jpg', price: 20 },
  { id: 3, name: 'Save more', image: 'https://st4.depositphotos.com/15467216/29555/v/450/depositphotos_295559670-stock-illustration-sale-special-offer-tag-price.jpg', price: 30 },
  { id: 4, name: 'Cash on Delivery', image: 'https://www.next-terra.com/wp-content/uploads/2023/07/Design-sans-titre-1024x1024.png', price: 40 },
];

const TopCategories = (prop: any) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => {prop.nav.navigate('Products')}}>
      <View style={{ margin: 10 }}>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <Text style={{ textAlign: 'center', maxWidth:50 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 18 }}>On EasyBuy</Text>
      <View style={{alignItems: 'center', justifyContent:'space-around', paddingHorizontal: 12}}>
        <FlatList
        data={categories}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
      
      <TouchableOpacity style={{}} onPress={() => {prop.nav.navigate("Products")}}>
        <Text style={{ textAlign: 'center' }}>See all ></Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopCategories;