import { INPUT_BACKGROUND_COLOR } from '@/constants/Colors';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  extend?: boolean;
  error?: string;
}

export default function InputField({ 
  label, 
  placeholder,
  value,
  onChangeText,
  extend = false,
  error,
  ...props
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          extend && styles.multilineInput,
          error && styles.inputError
        ]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {error && (
        <Text style={styles.errorText}>{error}</Text>
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
    borderWidth: 1,
    borderColor: 'transparent',
  },
  multilineInput: {
    height: 160,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  inputError: {
    borderColor: '#FF6B6B',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: 4,
  },
});