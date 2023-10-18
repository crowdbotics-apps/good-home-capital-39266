import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const CreditScoreScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Your Credit Score</Text>
          <Text style={styles.score}>750</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Loan Rates</Text>
          <Text style={styles.text}>Current Rate: 3.5%</Text>
          <Text style={styles.text}>Potential Rate: 2.9%</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Pricing Details</Text>
          <Text style={styles.text}>Estimated Monthly Payment: $1,200</Text>
          <Text style={styles.text}>Total Loan Amount: $200,000</Text>
          <Text style={styles.text}>Fees: $2,000</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Fees Breakdown</Text>
          <Text style={styles.text}>Origination Fees: $500</Text>
          <Text style={styles.text}>Application Fees: $300</Text>
          <Text style={styles.text}>Other Charges: $1,200</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Loan Term Options</Text>
          <Button title="15 years" onPress={() => {}} />
          <Button title="30 years" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Rate Lock Feature</Text>
          <Button title="Lock Rate" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Button title="Back" onPress={() => {}} />
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
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4CAF50'
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default CreditScoreScreen;