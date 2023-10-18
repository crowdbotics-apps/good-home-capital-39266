import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const CreditScoreScreen = () => {
  return <SafeAreaView style={_styles.bTqpkqDR}>
      <ScrollView>
        <View style={_styles.tdhxqdMM}>
          <Text style={_styles.yKpfvwgH}>Your Credit Score</Text>
          <Text style={_styles.BPRloJaq}>750</Text>
          <Image style={_styles.TpIuZIip} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
        <View style={_styles.uqrzxpsb}>
          <Text style={_styles.uAcPDNUz}>Loan Rates</Text>
          <Text style={_styles.UcuEqUxb}>Current Rate: 3.5%</Text>
          <Text style={_styles.crMgpDtS}>Potential Rate: 2.9%</Text>
        </View>
        <View style={_styles.XNgFitlI}>
          <Text style={_styles.UOKzFAxe}>Pricing Details</Text>
          <Text style={_styles.AMckIMuB}>Estimated Monthly Payment: $1,200</Text>
          <Text style={_styles.GJOnUQuN}>Total Loan Amount: $200,000</Text>
          <Text style={_styles.fjphFKRg}>Fees: $2,000</Text>
        </View>
        <View style={_styles.shawbkOt}>
          <Button title="Accept Rates" onPress={() => {}} />
        </View>
        <View style={_styles.RWgkUwMt}>
          <Text style={_styles.EldGHvcV}>Fees Breakdown</Text>
          <Text style={_styles.yUlFWuMi}>Origination Fee: $500</Text>
          <Text style={_styles.sbOCIqZg}>Application Fee: $200</Text>
          <Text style={_styles.cPYOSSwr}>Other Fees: $1,300</Text>
        </View>
        <View style={_styles.UAMerRiI}>
          <Button title="Back" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default CreditScoreScreen;

const _styles = StyleSheet.create({
  bTqpkqDR: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  tdhxqdMM: {
    alignItems: "center",
    padding: 20
  },
  yKpfvwgH: {
    fontSize: 24,
    fontWeight: "bold"
  },
  BPRloJaq: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4CAF50"
  },
  TpIuZIip: {
    width: 200,
    height: 200,
    margin: 20
  },
  uqrzxpsb: {
    padding: 20
  },
  uAcPDNUz: {
    fontSize: 18,
    fontWeight: "bold"
  },
  UcuEqUxb: {
    fontSize: 16
  },
  crMgpDtS: {
    fontSize: 16
  },
  XNgFitlI: {
    padding: 20
  },
  UOKzFAxe: {
    fontSize: 18,
    fontWeight: "bold"
  },
  AMckIMuB: {
    fontSize: 16
  },
  GJOnUQuN: {
    fontSize: 16
  },
  fjphFKRg: {
    fontSize: 16
  },
  shawbkOt: {
    padding: 20
  },
  RWgkUwMt: {
    padding: 20
  },
  EldGHvcV: {
    fontSize: 18,
    fontWeight: "bold"
  },
  yUlFWuMi: {
    fontSize: 16
  },
  sbOCIqZg: {
    fontSize: 16
  },
  cPYOSSwr: {
    fontSize: 16
  },
  UAMerRiI: {
    padding: 20
  }
});