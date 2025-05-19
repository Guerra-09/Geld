import { Image, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';

interface LogoInCircleProps {
  logo: string,
  backgroundColor?: string;
  textColor?: string;
}

export default function LogoInCircle({ logo, backgroundColor }: LogoInCircleProps) {

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image
        source={{ uri: logo }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '80%',
    height: '80%'
  }
});
