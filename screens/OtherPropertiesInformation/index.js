import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PropertyScreen = () => {
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
      <TextInput style={styles.input} placeholder="Address" onChangeText={setAddress} value={address} />
      <TextInput style={styles.input} placeholder="City" onChangeText={setCity} value={city} />
      <TextInput style={styles.input} placeholder="State" onChangeText={setState} value={state} />
      <TextInput style={styles.input} placeholder="Zip Code" onChangeText={setZip} value={zip} />
      <TextInput style={styles.input} placeholder="Annual Property Tax" onChangeText={setAnnualTax} value={annualTax} />
      <TextInput style={styles.input} placeholder="Insurance Premium" onChangeText={setInsurancePremium} value={insurancePremium} />
      <View style={styles.radioContainer}>
        <TouchableOpacity style={styles.radio} onPress={() => setPropertyType('Primary Residence')}>
          <Text style={styles.radioText}>Primary Residence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radio} onPress={() => setPropertyType('Second Home')}>
          <Text style={styles.radioText}>Second Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radio} onPress={() => setPropertyType('Investment Property')}>
          <Text style={styles.radioText}>Investment Property</Text>
        </TouchableOpacity>
      </View>
      <Button title="Add Property" onPress={() => {}} />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  radio: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  radioText: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default PropertyScreen;