import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const ScreenComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <TextInput style={styles.input} onChangeText={setFirstName} value={firstName} placeholder="First Name" />
      <TextInput style={styles.input} onChangeText={setLastName} value={lastName} placeholder="Last Name" />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email Address" />
      <TextInput style={styles.input} onChangeText={setMobileNumber} value={mobileNumber} placeholder="Mobile Number" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default ScreenComponent;