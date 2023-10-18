import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [isPercent, setIsPercent] = useState(true);
  const [loanAmount, setLoanAmount] = useState(0);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How much do you want to put down</Text>
      <TextInput style={styles.input} onChangeText={setInput} value={input} placeholder="Enter percentage" keyboardType="numeric" />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>{isPercent ? 'Percent' : '$'}</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isPercent ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => setIsPercent(previousState => !previousState)} value={isPercent} />
      </View>
      <Text style={styles.loanAmount}>Loan Amount: {loanAmount}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => console.log('Back button pressed')} />
        <Button title="Next" onPress={() => console.log('Next button pressed')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
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
    marginBottom: 20,
    paddingLeft: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  switchText: {
    fontSize: 18,
    marginRight: 10
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