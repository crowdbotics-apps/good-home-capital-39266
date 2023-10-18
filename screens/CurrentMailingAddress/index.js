import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AddressScreen = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isCurrentAddress, setIsCurrentAddress] = useState(null);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Is this your current mailing address?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity style={styles.radio} onPress={() => setIsCurrentAddress(true)}>
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radio} onPress={() => setIsCurrentAddress(false)}>
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
      <TextInput style={styles.input} placeholder="State" value={state} onChangeText={setState} />
      <TextInput style={styles.input} placeholder="Zip Code" value={zipCode} onChangeText={setZipCode} />
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  radio: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  radioText: {
    fontSize: 16
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default AddressScreen;