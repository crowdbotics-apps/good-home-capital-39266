import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Slider, StyleSheet, Image } from 'react-native';

const App = () => {
  const [isSelected, setSelection] = useState('yes');
  const [giftAmount, setGiftAmount] = useState(0);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.question}>Will you be using a gift fund for down payment?</Text>
      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>Yes</Text>
        <Button title="Yes" onPress={() => setSelection('yes')} />
        <Text style={styles.radioText}>No</Text>
        <Button title="No" onPress={() => setSelection('no')} />
      </View>
      {isSelected === 'yes' && <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Gift fund amount</Text>
          <TextInput style={styles.input} onChangeText={text => setGiftAmount(text)} value={giftAmount} placeholder="Enter amount" keyboardType="numeric" />
          <Slider style={styles.slider} minimumValue={0} maximumValue={100000} onValueChange={value => setGiftAmount(value)} value={giftAmount} />
        </View>}
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  radioText: {
    fontSize: 18,
    marginRight: 10
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  },
  slider: {
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
export default App;