import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Will there be a Co-Borrower for qualifying purposes?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="1" onPress={() => {}} />
        <Button title="2" onPress={() => {}} />
        <Button title="3" onPress={() => {}} />
        <Button title="4" onPress={() => {}} />
        <Button title="None" onPress={() => {}} />
      </View>
      <View style={styles.footer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});
export default ScreenComponent;