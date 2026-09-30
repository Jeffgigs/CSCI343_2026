import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

// Stock image. To use a local image instead, put a file in /assets and use:
// source={require('../assets/recipes.jpg')}
const STOCK_IMAGE = {
  uri: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800',
};

export default function HomeScreen({ onGoToRecipes }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
      <Image source={STOCK_IMAGE} style={styles.image} resizeMode="cover" />
      <Button title="Go to Recipes" onPress={onGoToRecipes} color="#d35400" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5d3a1a',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 220,
    borderRadius: 12,
    marginBottom: 24,
    backgroundColor: '#ddd',
  },
});