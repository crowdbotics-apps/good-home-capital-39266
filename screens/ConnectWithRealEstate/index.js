import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AgentScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.question}>Do you want us to connect you with a agent?</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('yes')}>
            <Text style={selectedOption === 'yes' ? styles.selected : styles.unselected}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('no')}>
            <Text style={selectedOption === 'no' ? styles.selected : styles.unselected}>No</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    width: '90%',
    justifyContent: 'center'
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  selected: {
    color: 'green'
  },
  unselected: {
    color: 'grey'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    backgroundColor: '#4B9CD3',
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF'
  },
  image: {
    width: '100%',
    height: 200
  }
});
export default AgentScreen;