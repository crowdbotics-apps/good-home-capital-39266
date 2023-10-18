import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.question}>
        Did you or deceased spouse ever serve or are currently serving in USAF
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={selectedOption === 'yes' ? styles.optionSelected : styles.option} onPress={() => setSelectedOption('yes')}>
          <Text style={styles.optionText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={selectedOption === 'no' ? styles.optionSelected : styles.option} onPress={() => setSelectedOption('no')}>
          <Text style={styles.optionText}>No</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
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
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  optionSelected: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#000'
  },
  optionText: {
    color: '#000',
    fontWeight: 'bold'
  },
  buttonsContainer: {
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
    fontWeight: 'bold'
  }
});
export default ScreenComponent;