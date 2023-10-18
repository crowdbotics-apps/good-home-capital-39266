import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const CreditScoreScreen = () => {
  return <SafeAreaView style={_styles.WgynTOOf}>
      <ScrollView>
        <View style={_styles.qoEAxitG}>
          <Text style={_styles.BxXsaive}>Your Credit Score</Text>
          <Text style={_styles.CSvnBswE}>750</Text>
          <Image style={_styles.gxWpgIBy} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={_styles.VmKXtKQC}>
          <Text style={_styles.PtUvxOQh}>Loan Rates</Text>
          <Text style={_styles.bfjOZdWO}>Current Rate: 3.5%</Text>
          <Text style={_styles.BWZLvCtP}>Potential Rate: 2.9%</Text>
        </View>
        <View style={_styles.mzuivXFp}>
          <Text style={_styles.uSqEjRaX}>Pricing Details</Text>
          <Text style={_styles.VuJawKBU}>Estimated Monthly Payment: $1,200</Text>
          <Text style={_styles.GRmjsMMC}>Total Loan Amount: $200,000</Text>
          <Text style={_styles.hugJvuWR}>Fees: $2,000</Text>
        </View>
        <View style={_styles.DhhBAdgJ}>
          <Button title="Accept Rates" onPress={() => {}} />
        </View>
        <View style={_styles.OtJuheLC}>
          <Text style={_styles.MMGCrsGA}>Fees Breakdown</Text>
          <Text style={_styles.dVzCGiHE}>Origination Fee: $500</Text>
          <Text style={_styles.bemXmOEQ}>Application Fee: $200</Text>
          <Text style={_styles.OmcNRdxf}>Other Fees: $1,300</Text>
        </View>
        <View style={_styles.yMmtXpfj}>
          <Button title="Back" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default CreditScoreScreen;

const _styles = StyleSheet.create({
  WgynTOOf: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  qoEAxitG: {
    alignItems: "center",
    padding: 20
  },
  BxXsaive: {
    fontSize: 24,
    fontWeight: "bold"
  },
  CSvnBswE: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4CAF50"
  },
  gxWpgIBy: {
    width: 200,
    height: 200,
    margin: 20
  },
  VmKXtKQC: {
    padding: 20
  },
  PtUvxOQh: {
    fontSize: 18,
    fontWeight: "bold"
  },
  bfjOZdWO: {
    fontSize: 16
  },
  BWZLvCtP: {
    fontSize: 16
  },
  mzuivXFp: {
    padding: 20
  },
  uSqEjRaX: {
    fontSize: 18,
    fontWeight: "bold"
  },
  VuJawKBU: {
    fontSize: 16
  },
  GRmjsMMC: {
    fontSize: 16
  },
  hugJvuWR: {
    fontSize: 16
  },
  DhhBAdgJ: {
    padding: 20
  },
  OtJuheLC: {
    padding: 20
  },
  MMGCrsGA: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dVzCGiHE: {
    fontSize: 16
  },
  bemXmOEQ: {
    fontSize: 16
  },
  OmcNRdxf: {
    fontSize: 16
  },
  yMmtXpfj: {
    padding: 20
  }
});