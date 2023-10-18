import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddressScreen = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [annualTaxes, setAnnualTaxes] = useState('');
  const [hoaInfo, setHoaInfo] = useState('');
  const [hoaFees, setHoaFees] = useState('');
  const [yearAcquired, setYearAcquired] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [legalDescription, setLegalDescription] = useState('');
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Current Address</Text>
      <TextInput style={styles.input} placeholder="City" onChangeText={setCity} value={city} />
      <TextInput style={styles.input} placeholder="State" onChangeText={setState} value={state} />
      <TextInput style={styles.input} placeholder="Zip Code" onChangeText={setZip} value={zip} />
      <View style={styles.buttonContainer}>
        <Button title="Own" onPress={() => {}} />
        <Button title="Rent" onPress={() => {}} />
        <Button title="Live Free" onPress={() => {}} />
      </View>
      <TextInput style={styles.input} placeholder="Property Type" onChangeText={setPropertyType} value={propertyType} />
      <TextInput style={styles.input} placeholder="Annual Taxes" onChangeText={setAnnualTaxes} value={annualTaxes} />
      <TextInput style={styles.input} placeholder="HOA Info" onChangeText={setHoaInfo} value={hoaInfo} />
      <TextInput style={styles.input} placeholder="HOA Fees" onChangeText={setHoaFees} value={hoaFees} />
      <TextInput style={styles.input} placeholder="Year Acquired" onChangeText={setYearAcquired} value={yearAcquired} />
      <TextInput style={styles.input} placeholder="Year Built" onChangeText={setYearBuilt} value={yearBuilt} />
      <TextInput style={styles.input} placeholder="Legal Description" onChangeText={setLegalDescription} value={legalDescription} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
export default AddressScreen;