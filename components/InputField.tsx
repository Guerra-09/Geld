import { INPUT_BACKGROUND_COLOR } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  extend?: boolean,
}

export default function InputField({ 
  label, 
  placeholder,
  value,
  onChangeText,
  extend = false
}: InputFieldProps) {
  const [internalValue, setInternalValue] = useState('');

  const currentValue = value !== undefined ? value : internalValue;
  const handleChange = onChangeText || setInternalValue;


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {extend ? (
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={currentValue}
          onChangeText={handleChange}
          multiline
          textAlignVertical="top" // Alinea el texto arriba
          numberOfLines={6} // Número inicial de líneas visibles
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={currentValue}
          onChangeText={handleChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    marginBottom: 8
  },
  input: {
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: INPUT_BACKGROUND_COLOR,
    color: 'white',
  },
  multilineInput: {
    height: 160,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
});
