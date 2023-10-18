import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, CheckBox, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Display screen text</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <View style={styles.checkboxContainer}>
          <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
          <Text style={styles.label}>Electronic signature</Text>
        </View>
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
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
  }
});
export default ScreenComponent;