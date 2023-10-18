import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [annualTax, setAnnualTax] = useState('');
  const [insurancePremium, setInsurancePremium] = useState('');
  const [propertyType, setPropertyType] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Property Information</Text>
      <TextInput style={styles.input} onChangeText={setAddress} value={address} placeholder="Address" />
      <TextInput style={styles.input} onChangeText={setCity} value={city} placeholder="City" />
      <TextInput style={styles.input} onChangeText={setState} value={state} placeholder="State" />
      <TextInput style={styles.input} onChangeText={setZip} value={zip} placeholder="Zip Code" />
      <TextInput style={styles.input} onChangeText={setAnnualTax} value={annualTax} placeholder="Annual Property Tax" />
      <TextInput style={styles.input} onChangeText={setInsurancePremium} value={insurancePremium} placeholder="Insurance Premium" />
      <View style={styles.buttonContainer}>
        <Button title="Primary Residence" onPress={() => setPropertyType('Primary Residence')} />
        <Button title="Second Home" onPress={() => setPropertyType('Second Home')} />
        <Button title="Investment Property" onPress={() => setPropertyType('Investment Property')} />
      </View>
      <Button title="Add Property" onPress={() => console.log('Property Added')} />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => console.log('Back')} />
        <Button title="Next" onPress={() => console.log('Next')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});
export default ScreenComponent;