import { StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Text } from './Themed';

interface DefaultButtonProps { 
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export function DefaultButton({ label, onPress, disabled }: DefaultButtonProps) {
  return (
    <Pressable 
      style={[styles.container, disabled && styles.disabled]} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>
        {label}
      </Text>
      {disabled && <ActivityIndicator color="white" style={styles.spinner} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#31717A',
    borderRadius: 18
  },
  disabled: {
    opacity: 0.7,
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  spinner: {
    marginLeft: 8,
  },
});