import { useState } from 'react';
import { StyleSheet, Switch, Text } from 'react-native';
import { View } from './Themed';

interface ToggleSwitchProps { 
  label: string
}

export function ToggleSwitch({ label }: ToggleSwitchProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>
        {label}
      </Text>

      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#293638',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingInline: 5
  },
  text: {
    color: 'white'
  },
});
