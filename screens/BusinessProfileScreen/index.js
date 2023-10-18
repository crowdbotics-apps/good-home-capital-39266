import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

const BusinessProfileScreen = () => {
  return <SafeAreaView style={_styles.EhGaQjaw}>
      <ScrollView>
        <View style={_styles.KtWpvNkK}>
          <Text style={_styles.TbLkLmgY}>General Information</Text>
          <TextInput placeholder="Business Name" style={_styles.rXynXIfH} />
          <TextInput placeholder="Legal Structure" style={_styles.nIJQDruy} />
          <TextInput placeholder="Registration Details" style={_styles.FdfDpXgk} />
          <TextInput placeholder="Description" style={_styles.BMMIkYJj} />

          <Text style={_styles.IwCOaHRb}>Contacts and Addresses</Text>
          <TextInput placeholder="Email Address" style={_styles.eGyDilRF} />
          <TextInput placeholder="Phone Number" style={_styles.XjznGPHe} />
          <TextInput placeholder="Physical Address" style={_styles.sUCXkcsX} />

          <Text style={_styles.cjOoiaNS}>Licenses</Text>
          <Button title="Upload License" onPress={() => {}} />

          <Text style={_styles.aPXxXSLK}>Departments</Text>
          <TextInput placeholder="Department Name" style={_styles.wTLODkbf} />

          <Text style={_styles.KWlbqbLK}>Logos</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.SnpbOOSJ} />

          <Text style={_styles.eSbdGhNJ}>Payee Information</Text>
          <TextInput placeholder="Bank Account Details" style={_styles.UuVjmzmB} />
          <TextInput placeholder="Payment Preferences" style={_styles.KkPBWFZY} />

          <Button title="Save" onPress={() => {}} style={_styles.mSPvHtov} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default BusinessProfileScreen;

const _styles = StyleSheet.create({
  EhGaQjaw: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  KtWpvNkK: {
    padding: 20
  },
  TbLkLmgY: {
    fontSize: 24,
    fontWeight: "bold"
  },
  rXynXIfH: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  nIJQDruy: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  FdfDpXgk: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  BMMIkYJj: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  IwCOaHRb: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  eGyDilRF: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  XjznGPHe: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  sUCXkcsX: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  cjOoiaNS: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  aPXxXSLK: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  wTLODkbf: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  KWlbqbLK: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  SnpbOOSJ: {
    width: 100,
    height: 100,
    marginTop: 10
  },
  eSbdGhNJ: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  UuVjmzmB: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  KkPBWFZY: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  mSPvHtov: {
    marginTop: 20
  }
});