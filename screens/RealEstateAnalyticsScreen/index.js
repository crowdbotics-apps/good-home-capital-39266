import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const RealEstateAnalyticsScreen = () => {
  const dummyData = {
    portfolio: [{
      type: 'House',
      location: 'New York',
      equity: '500,000',
      value: '1,000,000'
    }, {
      type: 'Apartment',
      location: 'Los Angeles',
      equity: '300,000',
      value: '800,000'
    }],
    totalValue: '1,800,000',
    totalEquity: '800,000',
    appreciation: '10%'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.portfolioContainer}>
          {dummyData.portfolio.map((property, index) => <View key={index} style={styles.propertyCard}>
              <Image style={styles.propertyImage} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
              <Text style={styles.propertyText}>{property.type} in {property.location}</Text>
              <Text style={styles.propertyText}>Equity: {property.equity}</Text>
              <Text style={styles.propertyText}>Value: {property.value}</Text>
            </View>)}
        </View>
        <View style={styles.metricsContainer}>
          <Text style={styles.metricsText}>Total Value: {dummyData.totalValue}</Text>
          <Text style={styles.metricsText}>Total Equity: {dummyData.totalEquity}</Text>
          <Text style={styles.metricsText}>Appreciation: {dummyData.appreciation}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  portfolioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10
  },
  propertyCard: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  propertyImage: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  propertyText: {
    fontSize: 16,
    color: '#333333',
    marginTop: 10
  },
  metricsContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10
  },
  metricsText: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 10
  }
});
export default RealEstateAnalyticsScreen;