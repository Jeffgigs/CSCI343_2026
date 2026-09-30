import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

export default function AddRecipeScreen({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const saveHandler = () => {
    if (title.trim() === '' || text.trim() === '') {
      Alert.alert('Missing info', 'Please enter both a title and recipe text.');
      return;
    }
    onSave(title.trim(), text.trim());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Recipe</Text>

      <Text style={styles.label}>Recipe Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter recipe title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Recipe Text</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter ingredients and instructions"
        value={text}
        onChangeText={setText}
        multiline
        textAlignVertical="top"
      />

      <View style={styles.buttons}>
        <Button title="Save" onPress={saveHandler} color="#27ae60" />
        <Button title="Cancel" onPress={onCancel} color="#c0392b" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5d3a1a',
    textAlign: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#5d3a1a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  textArea: {
    height: 160,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});