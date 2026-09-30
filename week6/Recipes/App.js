import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';

export default function App() {
  // Which screen is showing: 'home' | 'recipes' | 'add'
  const [currentScreen, setCurrentScreen] = useState('home');

  // The list of recipes lives here and is passed down to child screens
  const [recipes, setRecipes] = useState([
    {
      id: '1',
      title: 'Spaghetti Aglio e Olio',
      text: 'Boil spaghetti until al dente. Sauté sliced garlic in olive oil with chili flakes, toss with the pasta and a splash of pasta water, and finish with parsley.',
    },
    {
      id: '2',
      title: 'Classic Pancakes',
      text: 'Whisk flour, sugar, baking powder, and salt. Mix in milk, egg, and melted butter. Cook ladles of batter on a hot greased pan until golden on both sides.',
    },
  ]);

  const addRecipeHandler = (title, text) => {
    const newRecipe = { id: Date.now().toString(), title, text };
    setRecipes((current) => [...current, newRecipe]);
    setCurrentScreen('recipes');
  };

  const deleteRecipeHandler = (id) => {
    setRecipes((current) => current.filter((recipe) => recipe.id !== id));
  };

  let screen;
  if (currentScreen === 'home') {
    screen = <HomeScreen onGoToRecipes={() => setCurrentScreen('recipes')} />;
  } else if (currentScreen === 'recipes') {
    screen = (
      <RecipesScreen
        recipes={recipes}
        onDelete={deleteRecipeHandler}
        onAddRecipe={() => setCurrentScreen('add')}
        onGoHome={() => setCurrentScreen('home')}
      />
    );
  } else {
    screen = (
      <AddRecipeScreen
        onSave={addRecipeHandler}
        onCancel={() => setCurrentScreen('recipes')}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
  },
});