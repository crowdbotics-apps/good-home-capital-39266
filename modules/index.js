import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Button, View } from 'react-native';

const DenialScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Denial Message</Text>
      <Text style={styles.text}>Reasons for disqualification</Text>
      <View style={styles.buttonContainer}>
        <Button title="Return Home" onPress={() => console.log('Return Home Pressed')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    width: '80%'
  }
});
export default DenialScreen;