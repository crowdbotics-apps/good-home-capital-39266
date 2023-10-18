import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RaceScreen = () => {
  const [selectedRace, setSelectedRace] = useState('');
  const races = ['American Indiana or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacific islander', 'White', "I don't wish to provide"];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.radioGroup}>
        {races.map((race, index) => <TouchableOpacity key={index} style={styles.radio} onPress={() => setSelectedRace(race)}>
            <Text style={styles.radioText}>{race}</Text>
            {selectedRace === race && <View style={styles.radioDot} />}
          </TouchableOpacity>)}
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
  radioGroup: {
    width: '80%',
    marginBottom: 20
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10
  },
  radioText: {
    flex: 1,
    fontSize: 16
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: '#4B9CD3',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default RaceScreen;