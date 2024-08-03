import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import BottomBar from '../components/BottomBar';

const Products = (prop: any) => {
  const nav = prop.navigation;

  const products: Items[] = [
    { id: 1, name: 'Product 1', image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true', price: 25, rating: 3.5 },
    { id: 2, name: 'Product 2', image: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/category-images/60b087b326012.png', price: 30, rating: 3 },
    { id: 3, name: 'Product 3', image: 'https://assets.ajio.com/medias/sys_master/root/20210716/CEMd/60f090d6aeb269a9e3445724/-473Wx593H-460743704-lightblue-MODEL.jpg', price: 20, rating: 5 },
    { id: 4, name: 'Product 4', image: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/category-images/60b087b326012.png', price: 20, rating: 4.5 },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150', price: 20, rating: 3 },
    { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/150', price: 20, rating: 4.5 },
    { id: 7, name: 'Product 7', image: 'https://via.placeholder.com/150', price: 20, rating: 2.5 },
  ];

  const renderProduct = (product: Items) => (
    <TouchableOpacity key={product.id} style={styles.productContainer}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      {/* Add your rating stars and add to cart button here */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>All Products</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} horizontal={false}>
        <View style={styles.productRow}>
          {products.map((product) => renderProduct(product))}
        </View>
      </ScrollView>
      <BottomBar nav={nav} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingBottom: 56, // Adjust this value if you have a different height for the BottomBar
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16, // Ensure consistent padding with the rest of the content
  },
  scrollViewContainer: {
    flexDirection: 'column',
    paddingHorizontal: 16, // Ensure consistent padding with the rest of the content
  },
  productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%', // Adjust this value to leave space for margins/padding
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden', // Ensure image doesn't exceed border radius
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    marginTop: 5,
    paddingLeft: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    paddingLeft: 5,
  },
});

export default Products;
