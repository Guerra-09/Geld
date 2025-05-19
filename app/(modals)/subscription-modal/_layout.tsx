import { Text } from '@/components/Themed';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function ModalLayout() {

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#293638' },
        headerTintColor: 'white',
        presentation: 'modal',
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
            presentation: 'modal',
            headerShown: true,
          }}
      />
      <Stack.Screen name="createSubscription" />
    </Stack>
  );
}