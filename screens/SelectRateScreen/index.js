import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
const dummyData = {
  creditScores: ['Beurre 1', 'Beurre 2', 'Beurre 3'],
  purchasePrice: '100,000',
  downPayment: '20,000',
  loanAmount: '80,000',
  occupancyType: 'Primary Residence',
  propertyType: 'Single Family Home',
  loanType: '30 Year Fixed',
  ratesOptions: [{
    rate: '3.5%',
    apr: '3.7%',
    payment: '500',
    points: '0.5',
    fees: '100'
  }, {
    rate: '3.6%',
    apr: '3.8%',
    payment: '510',
    points: '0.6',
    fees: '110'
  }, {
    rate: '3.7%',
    apr: '3.9%',
    payment: '520',
    points: '0.7',
    fees: '120'
  }]
};

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Credit Scores</Text>
      {dummyData.creditScores.map((score, index) => <Text key={index} style={styles.text}>{score}</Text>)}
      <Text style={styles.title}>Purchase Price: {dummyData.purchasePrice}</Text>
      <Text style={styles.title}>Down Payment: {dummyData.downPayment}</Text>
      <Text style={styles.title}>Loan Amount: {dummyData.loanAmount}</Text>
      <Text style={styles.title}>Occupancy Type: {dummyData.occupancyType}</Text>
      <Text style={styles.title}>Property Type: {dummyData.propertyType}</Text>
      <Text style={styles.title}>Loan Type: {dummyData.loanType}</Text>
      <Text style={styles.title}>Rates Options</Text>
      <ScrollView>
        {dummyData.ratesOptions.map((option, index) => <View key={index} style={styles.rateOption}>
            <Text style={styles.text}>Rate: {option.rate}</Text>
            <Text style={styles.text}>APR: {option.apr}</Text>
            <Text style={styles.text}>Payment: {option.payment}</Text>
            <Text style={styles.text}>Points: {option.points}</Text>
            <Text style={styles.text}>Fees: {option.fees}</Text>
          </View>)}
      </ScrollView>
      <Button title="Get Rates" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  },
  rateOption: {
    marginBottom: 20
  }
});
export default ScreenComponent;