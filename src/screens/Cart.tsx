import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';

const Cart = (prop: any) => {
  const nav = prop.navigation;
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: 25, quantity: 1 },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: 30, quantity: 2 },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', price: 20, quantity: 1 },
  ]);

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Function to remove item from cart
  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Function to handle purchase
  const handlePurchase = () => {
    // Implement your logic here, e.g., send order to server or navigate to checkout screen
    console.log("Purchase button pressed");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{paddingHorizontal:16}}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
              <Image source={require('../../assets/images/close.png')} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
        <TouchableOpacity onPress={handlePurchase} style={styles.purchaseButton}>
          <Text style={styles.purchaseButtonText}>Purchase</Text>
        </TouchableOpacity>
      </View>
      <BottomBar nav={nav}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 60, // Adjusted to accommodate the bottom bar
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
  },
  removeButton: {
    alignSelf: 'flex-start',
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 55, // Adjusted to accommodate the bottom bar
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  purchaseButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
