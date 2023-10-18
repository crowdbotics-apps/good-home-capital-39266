import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, ScrollView, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Home" />
        <Button title="Products" />
        <Button title="Resources" />
        <Button title="Pricing" />
        <Button title="Login" />
        <Button title="30-Day Free Trial" />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Welcome to Home Financing</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Your one-stop solution for all your home financing needs.</Text>
        <Button title="Buy a Home" />
        <Button title="Take Cash Out" />
        <Button title="Lower my Rate" />
        <Button title="My Home Value" />
        <TextInput placeholder="Subscribe to our newsletter" />
        <Button title="Subscribe" />
        <ScrollView>
          <Text style={styles.title}>Loan Type Articles</Text>
          <Text style={styles.text}>Article 1</Text>
          <Text style={styles.text}>Article 2</Text>
          <Text style={styles.text}>Article 3</Text>
          <Button title="See More" />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Button title="About Us" />
        <Button title="Contact Us" />
        <Button title="Privacy Policy" />
        <Button title="Terms of Service" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  body: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc'
  }
});
export default HomeScreen;