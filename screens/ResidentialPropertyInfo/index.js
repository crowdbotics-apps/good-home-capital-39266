import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PropertyScreen = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [ownedProperty, setOwnedProperty] = useState(null);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Property Address</Text>
      <Text style={styles.question}>Have you owned any type of residential property in the last 6 months?</Text>
      <View style={styles.radioButtons}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setOwnedProperty(true)}>
          <Text style={styles.radioButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setOwnedProperty(false)}>
          <Text style={styles.radioButtonText}>No</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="Address" onChangeText={setAddress} value={address} />
      <TextInput style={styles.input} placeholder="City" onChangeText={setCity} value={city} />
      <TextInput style={styles.input} placeholder="State" onChangeText={setState} value={state} />
      <TextInput style={styles.input} placeholder="Zip Code" onChangeText={setZipCode} value={zipCode} />
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  question: {
    fontSize: 18,
    marginBottom: 20
  },
  radioButtons: {
    flexDirection: 'row',
    marginBottom: 20
  },
  radioButton: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  radioButtonText: {
    fontSize: 16
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});
export default PropertyScreen;