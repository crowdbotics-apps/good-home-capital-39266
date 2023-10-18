import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PropertyScreen = ({
  navigation
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    if (selectedOption === 'preQualified' || selectedOption === 'activelyLooking') {
      navigation.navigate('NextPage');
    } else {
      navigation.navigate('PropertyScreen');
    }
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Where are you buying a property?</Text>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('activelyLooking')}>
        <Text style={styles.optionText}>Actively looking for a property</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('preQualified')}>
        <Text style={styles.optionText}>I want to get pre qualified</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('foundProperty')}>
        <Text style={styles.optionText}>Found a property but no offer made</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('madeOffer')}>
        <Text style={styles.optionText}>Made an offer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('signedAgreement')}>
        <Text style={styles.optionText}>Signed purchase agreement</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10
  },
  optionText: {
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default PropertyScreen;