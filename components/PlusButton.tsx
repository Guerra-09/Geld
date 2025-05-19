import React from 'react'
import { View, Text } from './Themed'
import { StyleSheet } from 'react-native';

export default function PlusButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.plus}>+</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31717A',
    minWidth: 80,
    minHeight: 80,
    borderRadius: 100
  },
  plus: {
    textAlign: 'center',
    fontSize: 60
  }
});
