import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const AssetScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What are your assets?</Text>
      <Text style={styles.subtitle}>This is needed to ensure the borrower meets reserve requirements, has enough for a down payment, and closing costs</Text>
      <Text style={styles.subtitle}>At least one needs to be selected</Text>
      <View style={styles.buttonContainer}>
        <Button title="Check savings" onPress={() => {}} />
        <Button title="Money market" onPress={() => {}} />
        <Button title="CD" onPress={() => {}} />
        <Button title="Mutual Funds" onPress={() => {}} />
        <Button title="Stocks and bonds" onPress={() => {}} />
      </View>
      <View style={styles.navigationContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default AssetScreen;