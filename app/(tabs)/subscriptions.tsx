import { FlatList, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { Subscription } from '@/constants/interfaces';
import { Cycles } from '@/constants/enums';
import SubscriptionCard from '@/components/SubscriptionCard';

export default function SusbcriptionScreen() {
  const subscriptionMock: Subscription[] = [
    {
      uuid: 'uuid1',
      name: 'Spotify',
      price: '9.99',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111624.png',
      iconColor: '',
      textColor: 'white',
      backgroundColor: '#000000',
      startDate: new Date(),
      cycle: Cycles.monthly
    },
    {
      uuid: 'uuid2',
      name: 'Netflix',
      price: '12.99',
      icon: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
      iconColor: '',
      textColor: 'black',
      backgroundColor: '#FFFFFF',
      startDate: new Date(),
      cycle: Cycles.monthly
    },
    {
      uuid: 'uuid3',
      name: 'Youtube Premium',
      price: '12.99',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1200px-YouTube_Premium_logo.svg.png',
      iconColor: '',
      textColor: 'black',
      backgroundColor: '#FFFFFF',
      startDate: new Date(),
      cycle: Cycles.monthly
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={subscriptionMock}
        keyExtractor={(item) => item.uuid}
        renderItem={( { item }) => (
          <View>
            <SubscriptionCard subscription={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
