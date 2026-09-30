import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RecipeItem({ recipe, onView, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title} numberOfLines={1}>
        {recipe.title}
      </Text>
      <View style={styles.buttons}>
        <Button title="View" onPress={onView} color="#2980b9" />
        <Button title="Delete" onPress={onDelete} color="#c0392b" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    marginRight: 8,
  },
  buttons: {
    flexDirection: 'row',
    gap: 6,
  },
});