import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Button, View } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Successfully removed/deleted</Text>
        <Button title="Close" onPress={() => console.log('Close button pressed')} />
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333'
  }
});
export default ScreenComponent;