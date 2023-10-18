import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';
const data = [{
  id: '1',
  title: 'Property'
}, {
  id: '2',
  title: 'Employment'
}, {
  id: '3',
  title: 'Income'
}, {
  id: '4',
  title: 'Assets'
}, {
  id: '5',
  title: 'About you'
}, {
  id: '6',
  title: 'Other Information'
}, {
  id: '7',
  title: 'Borrow'
}];

const NextStepsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Next Steps</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({
      item,
      index
    }) => <View style={styles.listItem}>
            <Text style={styles.listItemText}>{`${index + 1}. ${item.title}`}</Text>
          </View>} />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  listItem: {
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
  },
  listItemText: {
    fontSize: 18,
    color: '#333'
  }
});
export default NextStepsScreen;