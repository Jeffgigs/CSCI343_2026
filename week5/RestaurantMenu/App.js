import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseScreen from './screens/BaseScreen';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState("base");
  
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  function baseScreenHandler(){
    setCurrentScreen("base")
  }

  let Screen= <BaseScreen onNext={menuScreenHandler}/>;

  if (currentScreen == "menu")
    Screen= <MenuScreen />;
  return (
    <>
    <StatusBar style='light' />
    <SafeAreaProvider style={styles.container}>{Screen}</SafeAreaProvider>
    
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
