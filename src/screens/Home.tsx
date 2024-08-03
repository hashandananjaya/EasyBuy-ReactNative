import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import TopCategories from '../components/TopCategories';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import BottomBar from '../components/BottomBar';
import TopSellings from '../components/TopSellings';

const Home = (prop: any) => {
  const nav = prop.navigation;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeroSection nav={nav} />
        <TopCategories nav={nav} />
        <FeaturedProducts nav={nav} />
        <TopSellings nav={nav} />
      </ScrollView>
      <BottomBar nav={nav} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default Home;
