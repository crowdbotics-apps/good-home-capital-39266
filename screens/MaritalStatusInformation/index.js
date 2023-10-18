import React from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';

const MaritalStatusScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Married" onPress={() => {}} color="#841584" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Separated" onPress={() => {}} color="#841584" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Unmarried" onPress={() => {}} color="#841584" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonContainer: {
    margin: 20
  }
});
export default MaritalStatusScreen;