import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const InvestmentsScreen = () => {
  const investments = [{
    name: 'Investment 1',
    balance: 5000,
    performance: '+5%'
  }, {
    name: 'Investment 2',
    balance: 3000,
    performance: '-2%'
  }, {
    name: 'Investment 3',
    balance: 7000,
    performance: '+10%'
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Menu</Text>
        </View>
        <View style={styles.investmentList}>
          {investments.map((investment, index) => <View key={index} style={styles.investmentItem}>
              <Text style={styles.investmentName}>{investment.name}</Text>
              <Text style={styles.investmentBalance}>Balance: ${investment.balance}</Text>
              <Text style={styles.investmentPerformance}>Performance: {investment.performance}</Text>
            </View>)}
        </View>
        <View style={styles.portfolioDisplay}>
          <Text style={styles.portfolioText}>Total Portfolio Value: $15000</Text>
          <Text style={styles.portfolioText}>Asset Allocation: 50% Stocks, 30% Bonds, 20% Cash</Text>
        </View>
        <View style={styles.balanceChart}>
          <Image style={styles.chartImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={styles.recommendations}>
          <Text style={styles.recommendationText}>Recommended Products</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  sidebar: {
    padding: 20,
    backgroundColor: '#333'
  },
  sidebarText: {
    color: '#FFF',
    fontSize: 20
  },
  investmentList: {
    padding: 20
  },
  investmentItem: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  investmentName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  investmentBalance: {
    fontSize: 16
  },
  investmentPerformance: {
    fontSize: 16,
    color: 'green'
  },
  portfolioDisplay: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  portfolioText: {
    fontSize: 16
  },
  balanceChart: {
    height: 200,
    marginBottom: 10
  },
  chartImage: {
    width: '100%',
    height: '100%'
  },
  recommendations: {
    padding: 20,
    backgroundColor: '#FFF'
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default InvestmentsScreen;