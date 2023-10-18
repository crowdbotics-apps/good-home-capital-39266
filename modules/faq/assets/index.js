import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

const BusinessProfileScreen = () => {
  return <SafeAreaView style={_styles.ENgxcHnx}>
      <ScrollView>
        <View style={_styles.pBJumRYL}>
          <Text style={_styles.iAWaRIAE}>General Information</Text>
          <TextInput placeholder="Business Name" style={_styles.DRqhnGBP} />
          <TextInput placeholder="Legal Structure" style={_styles.dTJMdKHI} />
          <TextInput placeholder="Registration Details" style={_styles.NNIJTFlT} />
          <TextInput placeholder="Description" style={_styles.WJupxkWR} />

          <Text style={_styles.pWNiGsyI}>Contacts and Addresses</Text>
          <TextInput placeholder="Email Address" style={_styles.iaOmvKzg} />
          <TextInput placeholder="Phone Number" style={_styles.giLVsMgT} />
          <TextInput placeholder="Physical Address" style={_styles.hllkzcQp} />

          <Text style={_styles.qxGZrUqi}>Licenses</Text>
          <Button title="Upload License" onPress={() => {}} />

          <Text style={_styles.xbzsoKpk}>Departments</Text>
          <TextInput placeholder="Department Name" style={_styles.BfeHGnTe} />

          <Text style={_styles.aMuEJNWQ}>Logos</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.MIvhsSKK} />

          <Text style={_styles.grvRWUtN}>Payee Information</Text>
          <TextInput placeholder="Bank Account Details" style={_styles.pEPmlxKb} />
          <TextInput placeholder="Payment Preferences" style={_styles.MZNEOLtk} />

          <Button title="Save" onPress={() => {}} style={_styles.OvHOIpaX} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default BusinessProfileScreen;

const _styles = StyleSheet.create({
  ENgxcHnx: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  pBJumRYL: {
    padding: 20
  },
  iAWaRIAE: {
    fontSize: 24,
    fontWeight: "bold"
  },
  DRqhnGBP: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  dTJMdKHI: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  NNIJTFlT: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  WJupxkWR: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  pWNiGsyI: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  iaOmvKzg: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  giLVsMgT: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  hllkzcQp: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  qxGZrUqi: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  xbzsoKpk: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  BfeHGnTe: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  aMuEJNWQ: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  MIvhsSKK: {
    width: 100,
    height: 100,
    marginTop: 10
  },
  grvRWUtN: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  pEPmlxKb: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  MZNEOLtk: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  OvHOIpaX: {
    marginTop: 20
  }
});