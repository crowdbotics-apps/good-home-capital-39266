import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('');

  const RadioButton = ({
    title,
    value
  }) => <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption(value)}>
      <View style={selectedOption === value ? styles.radioButtonDot : null} />
      <Text style={styles.radioButtonText}>{title}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.question}>Will you occupy as primary residence?</Text>
      <RadioButton title="Yes" value="yes" />
      <RadioButton title="No" value="no" />

      <Text style={styles.question}>Have you had ownership of other property in past year?</Text>
      <RadioButton title="Principle residence" value="principleResidence" />
      <RadioButton title="FHA secondary home" value="fhaSecondaryHome" />
      <RadioButton title="Second home" value="secondHome" />
      <RadioButton title="Investment Property" value="investmentProperty" />

      <Text style={styles.question}>Do you have a family relationship or business affiliation with the seller of the property?</Text>
      <RadioButton title="Yes" value="yesAffiliation" />
      <RadioButton title="No" value="noAffiliation" />

      <Text style={styles.question}>What is the amount of money?</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} keyboardType="numeric" />

      <Text style={styles.question}>Have/Will you be applying for mortgage loan not the property securing loan on or before closing this transaction?</Text>
      <RadioButton title="Yes" value="yesMortgage" />
      <RadioButton title="No" value="noMortgage" />

      <Text style={styles.question}>Have/Will you be applying for new credit?</Text>
      <RadioButton title="Yes" value="yesCredit" />
      <RadioButton title="No" value="noCredit" />

      <Text style={styles.question}>Will this property be subject to a lien that could take priority over the first mortgage lien?</Text>
      <RadioButton title="Yes" value="yesLien" />
      <RadioButton title="No" value="noLien" />

      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
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
    marginVertical: 10
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioButtonDot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  radioButtonInnerDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000'
  },
  radioButtonText: {
    fontSize: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default ScreenComponent;