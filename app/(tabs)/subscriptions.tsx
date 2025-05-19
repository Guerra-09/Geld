import { FlatList, Pressable, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import SubscriptionCard from '@/components/SubscriptionCard';
import { subscriptionMock } from '@/mocks/subscriptionts.mock';
import PlusButton from '@/components/PlusButton';
import { Link } from 'expo-router';

export default function SusbcriptionScreen() {

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={subscriptionMock}
        keyExtractor={(item) => item.uuid}
        showsVerticalScrollIndicator={false}
        renderItem={( { item }) => (
          <View style={{paddingBottom: 10}}>
            <SubscriptionCard subscription={item} />
          </View>
        )}
      />
      <Link href="/(modals)/subscription-modal" asChild>
        <Pressable style={styles.plus}>
          <PlusButton />
        </Pressable>
      </Link>
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
  },
  flatListContent: {
    paddingBottom: 100, // TODO: Another idea instead of setting a padding it's to set and opacity to PlusButton when user stop scrolling, and when scrollls, appears again.
  },
  plus: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    padding: 15,  
  }
});
