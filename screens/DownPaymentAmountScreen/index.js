import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [toggle, setToggle] = useState(true);
  const loanAmount = 100000;
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>How much do you want to put down</Text>
      <TextInput style={styles.input} onChangeText={setInput} value={input} placeholder="Enter percentage" keyboardType="numeric" />
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={toggle ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle(true)}>
          <Text style={styles.toggleText}>Percent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={!toggle ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setToggle(false)}>
          <Text style={styles.toggleText}>$</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loanAmount}>Loan Amount: {loanAmount}</Text>
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
    justifyContent: 'center'
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  toggleButton: {
    padding: 10,
    backgroundColor: 'gray'
  },
  toggleButtonActive: {
    padding: 10,
    backgroundColor: 'blue'
  },
  toggleText: {
    color: 'white',
    fontSize: 18
  },
  loanAmount: {
    fontSize: 18,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
export default App;