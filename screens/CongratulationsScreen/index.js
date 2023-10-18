import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const CongratulationsScreen = () => {
  const steps = ['Property', 'Employment', 'Income', 'Assets', 'About you', 'Other Information', 'Borrow'];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.congratulationsText}>Congratulations!</Text>
      </View>
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => <Text key={index} style={styles.stepText}>
            {index + 1}. {step}
          </Text>)}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Start" color="#841584" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  congratulationsText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  stepsContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  stepText: {
    fontSize: 18,
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20
  }
});
export default CongratulationsScreen;