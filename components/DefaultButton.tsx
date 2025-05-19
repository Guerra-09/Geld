import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text } from 'react-native';
import { View } from './Themed';

interface DefaultButtonProps { 
  label: string
  onPress: () => void;
}

export function DefaultButton({ label, onPress }: DefaultButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 45,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#31717A',
    borderRadius: 18
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
});
