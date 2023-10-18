import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const PropertyScreen = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const dummyData = {
    propertyType: 'Multifamily',
    annualTaxes: 12000,
    hoaInfo: 'HOA Information',
    hoaFees: 200,
    yearBuilt: 1990,
    legalDescription: 'Legal Description',
    units: 3,
    isInvestment: true,
    expectedGrossRent: 3000
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Address" onChangeText={text => setAddress(text)} value={address} />
        <TextInput style={styles.input} placeholder="City" onChangeText={text => setCity(text)} value={city} />
        <TextInput style={styles.input} placeholder="State" onChangeText={text => setState(text)} value={state} />
        <TextInput style={styles.input} placeholder="Zip Code" onChangeText={text => setZip(text)} value={zip} />
        <Button title="Submit" onPress={() => {}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Property Type: {dummyData.propertyType}</Text>
        <Text style={styles.infoText}>Annual Taxes: ${dummyData.annualTaxes / 12}</Text>
        <Text style={styles.infoText}>HOA Info: {dummyData.hoaInfo}</Text>
        <Text style={styles.infoText}>HOA Fees: ${dummyData.hoaFees}</Text>
        <Text style={styles.infoText}>Year Built: {dummyData.yearBuilt}</Text>
        <Text style={styles.infoText}>Legal Description: {dummyData.legalDescription}</Text>
        {dummyData.propertyType === 'Multifamily' && <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />}
        {dummyData.isInvestment && <Text style={styles.infoText}>Expected Gross Rent: ${dummyData.expectedGrossRent}</Text>}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  infoContainer: {
    marginTop: 20
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10
  },
  icon: {
    width: 50,
    height: 50
  }
});
export default PropertyScreen;