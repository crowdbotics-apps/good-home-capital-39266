import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const userName = "John Doe";
  const metrics = {
    netWorth: 100000,
    liabilities: 50000,
    debtIncomeRatio: 0.5,
    income: 70000,
    spending: 30000,
    realEstateEquity: 20000,
    investments: 30000,
    creditCardBalances: 10000,
    loanBalances: 20000
  };
  const creditScores = {
    transUnion: 750,
    equifax: 760,
    experian: 770
  };
  const offers = ["Offer 1", "Offer 2", "Offer 3"];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>Welcome, {userName}!</Text>
        <View style={styles.metrics}>
          {Object.keys(metrics).map((key, index) => <View key={index} style={styles.metric}>
              <Text style={styles.metricTitle}>{key}</Text>
              <Text style={styles.metricValue}>{metrics[key]}</Text>
            </View>)}
        </View>
        <View style={styles.creditScores}>
          {Object.keys(creditScores).map((key, index) => <View key={index} style={styles.creditScore}>
              <Text style={styles.creditScoreTitle}>{key}</Text>
              <Text style={styles.creditScoreValue}>{creditScores[key]}</Text>
            </View>)}
        </View>
        <Image style={styles.chart} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <View style={styles.offers}>
          {offers.map((offer, index) => <View key={index} style={styles.offer}>
              <Text style={styles.offerText}>{offer}</Text>
            </View>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  metric: {
    width: '48%',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10
  },
  metricTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  metricValue: {
    fontSize: 14,
    color: '#666'
  },
  creditScores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  creditScore: {
    width: '30%',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  creditScoreTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  creditScoreValue: {
    fontSize: 14,
    color: '#666'
  },
  chart: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  offers: {
    marginBottom: 20
  },
  offer: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10
  },
  offerText: {
    fontSize: 16,
    color: '#333'
  }
});
export default HomeScreen;