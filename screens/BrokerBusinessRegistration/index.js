import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, Button, CheckBox, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = () => {
  const [businessName, setBusinessName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Business Name" onChangeText={setBusinessName} value={businessName} />
      <TextInput style={styles.input} placeholder="Business Registration Number" onChangeText={setRegistrationNumber} value={registrationNumber} />
      <TextInput style={styles.input} placeholder="Business Address" onChangeText={setBusinessAddress} value={businessAddress} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} placeholder="Phone Number" onChangeText={setPhoneNumber} value={phoneNumber} />
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setChecked} style={styles.checkbox} />
        <Text style={styles.label}>I agree to the Terms and Conditions</Text>
      </View>
      <Button title="Register" onPress={() => {}} />
      <Button title="Cancel" onPress={() => {}} color="red" />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 20
  }
});
export default RegistrationScreen;