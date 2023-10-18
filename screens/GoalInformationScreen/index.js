import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select goal</Text>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedGoal('Purchase')}>
        <Text style={selectedGoal === 'Purchase' ? styles.selected : styles.unselected}>Purchase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => setSelectedGoal('Refinance')}>
        <Text style={selectedGoal === 'Refinance' ? styles.selected : styles.unselected}>Refinance</Text>
      </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  option: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  selected: {
    color: '#000',
    fontWeight: 'bold'
  },
  unselected: {
    color: '#aaa'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  },
  button: {
    width: '45%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4B9DF8',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default ScreenComponent;