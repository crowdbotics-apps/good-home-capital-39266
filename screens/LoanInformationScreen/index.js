import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";

const LoanScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const RadioButton = ({
    title,
    onPress,
    selected
  }) => {
    return <TouchableOpacity style={styles.radioButton} onPress={onPress}>
        <View style={selected ? styles.radioButtonIconSelected : styles.radioButtonIcon} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>;
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select loan programme</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <RadioButton title="Conventional" onPress={() => setSelectedOption("Conventional")} selected={selectedOption === "Conventional"} />
        <RadioButton title="Bank Statement" onPress={() => setSelectedOption("Bank Statement")} selected={selectedOption === "Bank Statement"} />
        <RadioButton title="Real estate investor" onPress={() => setSelectedOption("Real estate investor")} selected={selectedOption === "Real estate investor"} />
      </View>
      <View style={styles.footer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginLeft: 10
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  radioButtonIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIconSelected: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  }
});
export default LoanScreen;