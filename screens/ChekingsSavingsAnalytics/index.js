import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

const CheckingAndSavingsScreen = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dummyData = {
    accounts: ['Checking', 'Savings', 'Investment'],
    transactions: [{
      id: '1',
      type: 'Income',
      amount: 2000
    }, {
      id: '2',
      type: 'Expense',
      amount: 500
    }],
    offers: ['Offer 1', 'Offer 2']
  };
  return <SafeAreaView style={styles.container}>
      <Button title={isSidebarOpen ? 'Close Menu' : 'Open Menu'} onPress={() => setSidebarOpen(!isSidebarOpen)} />
      {isSidebarOpen && <View style={styles.sidebar}>
          {dummyData.accounts.map(account => <Text key={account}>{account}</Text>)}
          <Button title="Add Account" onPress={() => {}} />
        </View>}
      <View style={styles.content}>
        <Text style={styles.title}>Income and Expenses</Text>
        <FlatList data={dummyData.transactions} renderItem={({
        item
      }) => <View style={styles.transaction}>
              <Text>{item.type}</Text>
              <Text>{item.amount}</Text>
            </View>} keyExtractor={item => item.id} />
        <Button title="Filter" onPress={() => {}} />
        <Text style={styles.title}>Offers</Text>
        {dummyData.offers.map(offer => <View style={styles.offer} key={offer}>
            <Image style={styles.offerImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text>{offer}</Text>
          </View>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  sidebar: {
    backgroundColor: '#f0f0f0',
    padding: 10
  },
  content: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  offer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  offerImage: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});
export default CheckingAndSavingsScreen;