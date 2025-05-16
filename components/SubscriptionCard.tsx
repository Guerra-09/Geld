// components/SubscriptionCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cycles } from '@/constants/enums';
import { Subscription } from '@/constants/interfaces';

interface Props {
  subscription: Subscription;
}

export default function SubscriptionCard({ subscription }: Props) {
  return (
    <View style={[
      styles.card,
      { backgroundColor: subscription.backgroundColor }
    ]}>
      <Image 
        source={{ uri: subscription.icon }} 
        style={styles.icon} 
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={[styles.name,
          { color: subscription.textColor || '#FFFFFF' }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {subscription.name}
        </Text>
        <Text style={styles.price}>${subscription.price}</Text>
      </View>
      <Text style={styles.cycle}> {subscription.cycle === Cycles.monthly ? 'Mensual' : 'Anual'}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    alignItems: 'center',
    minWidth: 250,
    maxWidth: 305,
  },
  icon: {
    width: 40,
    height: 40,
    // backgroundColor: 'red'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    // backgroundColor: 'blue'
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    // backgroundColor: 'green'
  },
  cycle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
    // backgroundColor: 'brown'
  },
});
