import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';

const PropertyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Property Information</Text>
          <Text style={styles.text}>Market Value: $500,000</Text>
          <Text style={styles.text}>Total Debt: $200,000</Text>
          <Text style={styles.text}>Available Equity: $300,000</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Taxes and Assessment</Text>
          <Text style={styles.text}>Property Tax: $5,000</Text>
          <Text style={styles.text}>Assessment: $450,000</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Recent Comparables</Text>
          <Text style={styles.text}>Property 1: $480,000</Text>
          <Text style={styles.text}>Property 2: $520,000</Text>
          <Text style={styles.text}>Property 3: $500,000</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Appreciation Trends</Text>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Equity-to-Debt Ratios</Text>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Mortgage History</Text>
          <Text style={styles.text}>Loan Amount: $200,000</Text>
          <Text style={styles.text}>Interest Rate: 3.5%</Text>
          <Text style={styles.text}>Payments: $898/month</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Action Options</Text>
          <Button title="Cash Out" onPress={() => {}} />
          <Button title="Debt Consolidation" onPress={() => {}} />
          <Button title="Sell Property" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Property Images</Text>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Property Location Map</Text>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Property History</Text>
          <Text style={styles.text}>Previous Sale: $400,000 in 2010</Text>
          <Text style={styles.text}>Previous Sale: $300,000 in 2005</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Contact Agent</Text>
          <Button title="Contact Agent" onPress={() => {}} />
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
  section: {
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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  }
});
export default PropertyScreen;