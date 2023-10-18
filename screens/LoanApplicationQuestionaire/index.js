import React from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Picker, ProgressBarAndroid } from "react-native";

const LoanApplicationWizardScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Loan Application Wizard</Text>
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Borrower Information</Text>
          <Text style={styles.prompt}>Please enter your information</Text>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Date of Birth" />
          <TextInput style={styles.input} placeholder="Social Security Number" />
          <TextInput style={styles.input} placeholder="Contact Details" />
          <Picker style={styles.dropdown}>
            <Picker.Item label="Citizenship Status" value="citizenship" />
            <Picker.Item label="Marital Status" value="marital" />
            <Picker.Item label="Loan Purpose" value="loanPurpose" />
          </Picker>
          <TouchableOpacity style={styles.radio}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radio}>
            <Text>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkbox}>
            <Text>Ethnicity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkbox}>
            <Text>Race</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkbox}>
            <Text>Loan Purpose</Text>
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Additional Financial Details" />
          <Text style={styles.error}>Error Message</Text>
          <TextInput style={styles.input} placeholder="Optional Demographic Information" />
          <Button title="Next" onPress={() => {}} />
          <Button title="Back" onPress={() => {}} disabled />
          <Button title="Submit" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} />
      </ScrollView>
      <View style={styles.footer}>
        <Text>Contact Information for User Assistance</Text>
      </View>
      <View style={styles.privacy}>
        <Text>Privacy and Consent Information</Text>
        <TouchableOpacity style={styles.checkbox}>
          <Text>User Agreement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 50,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  headerText: {
    fontSize: 18
  },
  section: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  prompt: {
    fontSize: 14,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  dropdown: {
    height: 50,
    marginBottom: 10
  },
  radio: {
    height: 40,
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
    paddingLeft: 10
  },
  checkbox: {
    height: 40,
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10
  },
  error: {
    color: "red",
    marginBottom: 10
  },
  footer: {
    height: 50,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  privacy: {
    padding: 20
  }
});
export default LoanApplicationWizardScreen;