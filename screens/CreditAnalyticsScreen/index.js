import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  cardName: 'Card 1',
  features: 'No annual fee, 2% cash back',
  annualFee: '$0',
  interestRate: '14.99%',
  rewards: '2 points per $1 spent',
  creditLimit: '$5000'
} // Add more card data here...
];

const CreditCardOffersScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Product Recommendations</Text>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.cardName}>{item.cardName}</Text>
            <Text style={styles.details}>Features: {item.features}</Text>
            <Text style={styles.details}>Annual Fee: {item.annualFee}</Text>
            <Text style={styles.details}>Interest Rate: {item.interestRate}</Text>
            <Text style={styles.details}>Rewards: {item.rewards}</Text>
            <Text style={styles.details}>Credit Limit: {item.creditLimit}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 5
  }
});
export default CreditCardOffersScreen;