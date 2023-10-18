import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Slider, StyleSheet } from 'react-native';

const PurchaseScreen = () => {
  const [amount, setAmount] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the purchase price</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="$ amount" keyboardType="numeric" />
      <Slider style={styles.slider} minimumValue={0} maximumValue={100} onValueChange={setSliderValue} value={sliderValue} />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => console.log('Back Pressed')} />
        <Button title="Next" onPress={() => console.log('Next Pressed')} />
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  slider: {
    width: '80%',
    height: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  }
});
export default PurchaseScreen;