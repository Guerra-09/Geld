import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { subscriptionItemMock } from '@/mocks/subscriptionItems.mock';

const fontColor: string = '#908D8D'

export default function CreateSubscriptionModal() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '', 
      headerStyle: { backgroundColor: '#293638' },
      headerLeft: () => (
        <Pressable onPress={ () => navigation.goBack() } style={{ marginLeft: 10 }}>
          <Text style={styles.headerButtons}>Cancel</Text>
        </Pressable>
      ),
      headerRight: () => (
        <Link href="/(modals)/subscription-modal/createSubscription" asChild>
          <Pressable style={{ marginRight: 10 }}>
            <Text style={styles.headerButtons}>Create Custom</Text>
          </Pressable>
        </Link>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={subscriptionItemMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubscriptionItem  // TODO: Reformar este compoonente para pasarle todo el objeto
            name={item.name}
            image={item.image}
            backgroundColor={'#51B848'}
            textColor={'#000000'}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293638',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  headerButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  headerButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  headerButtons: {
    color: fontColor,
    fontSize: 16
  },
  listContent: {
    paddingVertical: 10
  } 
});

interface SubscriptionItemProps {
  name: string;
  image: string;
  backgroundColor?: string;
  textColor?: string;
}

function SubscriptionItem({ name, image, backgroundColor, textColor }: SubscriptionItemProps) {
  return (
    <View style={itemStyle.container}>
      <Image source={{ uri: image }} style={itemStyle.image} />
      <Text style={itemStyle.name}>{name}</Text>
      <Link href={{
          pathname: "/(modals)/subscription-modal/createSubscription",
          params: { image, name, backgroundColor, textColor }
        }}  asChild>
        <Text style={itemStyle.plus}>+</Text>
      </Link>
    </View>
  );
}

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#293638',
    paddingBlock: 30
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: fontColor,
  },
  plus: {
    fontSize: 36,
    fontWeight: 'bold',
    color: fontColor
  }
});
