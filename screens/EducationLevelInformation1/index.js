import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const EducationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Highest education level</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Doctorate degree</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Masters degree</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Bachelors Degree</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Associates Degree</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>High School Diploma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GED</Text>
      </TouchableOpacity>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#4B9CD3',
    marginBottom: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  },
  navButton: {
    width: '45%',
    padding: 15,
    backgroundColor: '#4B9CD3',
    borderRadius: 5
  },
  skipButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#D3D3D3',
    marginTop: 20,
    borderRadius: 5
  }
});
export default EducationScreen;