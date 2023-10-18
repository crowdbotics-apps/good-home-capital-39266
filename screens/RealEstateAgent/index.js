import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isAgent, setIsAgent] = useState(null);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Are you working with a RE Agent?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity style={styles.radio} onPress={() => setIsAgent(true)}>
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radio} onPress={() => setIsAgent(false)}>
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Real estate information</Text>
      <TextInput style={styles.input} placeholder="First name" onChangeText={setFirstName} value={firstName} />
      <TextInput style={styles.input} placeholder="Last name" onChangeText={setLastName} value={lastName} />
      <TextInput style={styles.input} placeholder="Email Address" onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} placeholder="Mobile number" onChangeText={setMobileNumber} value={mobileNumber} />
      <View style={styles.buttonContainer}>
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
    marginBottom: 20
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  radio: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  radioText: {
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ScreenComponent;