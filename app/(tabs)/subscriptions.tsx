import { FlatList, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import SubscriptionCard from '@/components/SubscriptionCard';
import { subscriptionMock } from '@/mocks/subscriptionts.mock';

export default function SusbcriptionScreen() {

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
