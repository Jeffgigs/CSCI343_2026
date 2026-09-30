import React from 'react';
import { Modal, View, Text, Button, ScrollView, StyleSheet } from 'react-native';

export default function ViewRecipeModal({ visible, recipe, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>{recipe ? recipe.title : ''}</Text>
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>{recipe ? recipe.text : ''}</Text>
        </ScrollView>
        <Button title="Back to Recipes" onPress={onClose} color="#d35400" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5d3a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    color: '#333',
  },
});