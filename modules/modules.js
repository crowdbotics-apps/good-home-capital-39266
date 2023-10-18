import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const LoansAnalyticsScreen = () => {
  return <SafeAreaView style={_styles.IvfnmEHP}>
      <ScrollView>
        <View style={_styles.RAFAQJCo}>
          <Text style={_styles.MgmJWPyj}>Loans Analytics</Text>
          <View style={_styles.CHZNYHXR}>
            <Text style={_styles.qEWXpDnX}>Loan Payment Monitoring</Text>
            <Text>Monitor your existing loan payments, schedules, due dates, and payment history.</Text>
          </View>
          <View style={_styles.dregNRIM}>
            <Text style={_styles.lYzOjJws}>Apply for New Loans</Text>
            <Button title="Apply Now" onPress={() => {}} />
          </View>
          <View style={_styles.UBwnLpJJ}>
            <Text style={_styles.vGabXVVB}>Loan Quotes from Lenders</Text>
            <Text>Compare loan offers and select the most suitable option.</Text>
          </View>
          <View style={_styles.THzECZdi}>
            <Text style={_styles.CeFGBwOG}>Agent Profiles</Text>
            <Image style={_styles.cpHbFYOZ} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
            <Text>Experience, expertise, and contact details of loan agents.</Text>
          </View>
          <View style={_styles.WtJGsqMe}>
            <Text style={_styles.UvwteVrX}>Pull-Through Rate Metrics</Text>
            <Text>Assess the success rate of loan applications from initial stages to funding.</Text>
          </View>
          <View style={_styles.QUpCwCAy}>
            <Text style={_styles.oJQvqDZq}>Review Rates and Closing Costs</Text>
            <Text>Review interest rates, closing costs, and other financial details associated with loan offers.</Text>
          </View>
          <View style={_styles.oaafIEVn}>
            <Text style={_styles.VEyEyiVb}>Lock Rate Request</Text>
            <Button title="Lock Rate" onPress={() => {}} />
          </View>
          <View style={_styles.HdwLRdHX}>
            <Text style={_styles.rdLbyeGK}>Product and Service Recommendations</Text>
            <Text>Personalized product and service recommendations based on your financial objectives, interests, and spending patterns.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default LoansAnalyticsScreen;

const _styles = StyleSheet.create({
  IvfnmEHP: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  RAFAQJCo: {
    padding: 20
  },
  MgmJWPyj: {
    fontSize: 24,
    fontWeight: "bold"
  },
  CHZNYHXR: {
    marginTop: 20
  },
  qEWXpDnX: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dregNRIM: {
    marginTop: 20
  },
  lYzOjJws: {
    fontSize: 18,
    fontWeight: "bold"
  },
  UBwnLpJJ: {
    marginTop: 20
  },
  vGabXVVB: {
    fontSize: 18,
    fontWeight: "bold"
  },
  THzECZdi: {
    marginTop: 20
  },
  CeFGBwOG: {
    fontSize: 18,
    fontWeight: "bold"
  },
  cpHbFYOZ: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  WtJGsqMe: {
    marginTop: 20
  },
  UvwteVrX: {
    fontSize: 18,
    fontWeight: "bold"
  },
  QUpCwCAy: {
    marginTop: 20
  },
  oJQvqDZq: {
    fontSize: 18,
    fontWeight: "bold"
  },
  oaafIEVn: {
    marginTop: 20
  },
  VEyEyiVb: {
    fontSize: 18,
    fontWeight: "bold"
  },
  HdwLRdHX: {
    marginTop: 20
  },
  rdLbyeGK: {
    fontSize: 18,
    fontWeight: "bold"
  }
});