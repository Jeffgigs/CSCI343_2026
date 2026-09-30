import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import RecipeItem from '../components/RecipeItem';
import ViewRecipeModal from './ViewRecipeModal';

export default function RecipesScreen({
  recipes,
  onDelete,
  onAddRecipe,
  onGoHome,
}) {
  // The recipe currently shown in the modal (null = modal closed)
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>

      <View style={styles.topButtons}>
        <Button title="Add Recipe" onPress={onAddRecipe} color="#d35400" />
        <Button title="Home" onPress={onGoHome} color="#7f8c8d" />
      </View>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeItem
            recipe={item}
            onView={() => setSelectedRecipe(item)}
            onDelete={() => onDelete(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No recipes yet. Add one!</Text>
        }
      />

      <ViewRecipeModal
        visible={selectedRecipe !== null}
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5d3a1a',
    textAlign: 'center',
    marginBottom: 12,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
    fontSize: 16,
  },
});