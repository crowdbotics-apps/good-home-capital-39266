import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CitizenshipScreen = () => {
  const [ssn, setSsn] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="US Citizen" color="#841584" />
        <Button title="Permanent Resident Alien" color="#841584" />
        <Button title="Non Permanent Resident Alien" color="#841584" />
      </View>
      <Text style={styles.text}>SSN</Text>
      <TextInput style={styles.input} onChangeText={setSsn} value={ssn} placeholder="Enter SSN" keyboardType="numeric" />
      <View style={styles.buttonContainer}>
        <Button title="Back" color="#841584" />
        <Button title="Next" color="#841584" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8
  }
});
export default CitizenshipScreen;