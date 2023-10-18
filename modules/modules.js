import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from 'react-native';

const CreditCardOffersScreen = () => {
  const dummyData = [{
    id: '1',
    cardName: 'Card 1',
    cardDetails: '0% interest for the first year',
    cardImage: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    cardName: 'Card 2',
    cardDetails: '5% cash back on groceries',
    cardImage: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    cardName: 'Card 3',
    cardDetails: '2x points on travel',
    cardImage: 'https://tinyurl.com/42evm3m3'
  }];

  const renderItem = ({
    item
  }) => <View style={styles.card}>
      <Image source={{
      uri: item.cardImage
    }} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.cardName}</Text>
      <Text style={styles.cardDetails}>{item.cardDetails}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Credit Card Offers</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  cardDetails: {
    fontSize: 16,
    color: '#666'
  }
});
export default CreditCardOffersScreen;