import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = option => {
    setSelectedOption(option);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sex</Text>
      <View style={styles.radioGroup}>
        {['Male', 'Female', 'I do not wish to provide this information'].map(option => <TouchableOpacity key={option} style={styles.radioOption} onPress={() => handleSelect(option)}>
            <View style={selectedOption === option ? styles.radioSelected : styles.radio} />
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>)}
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
  radioGroup: {
    marginBottom: 20
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    marginRight: 10
  },
  optionText: {
    fontSize: 18
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default ScreenComponent;