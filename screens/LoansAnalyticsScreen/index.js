import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const LoansAnalyticsScreen = () => {
  return <SafeAreaView style={_styles.IjQjDcDY}>
      <ScrollView>
        <View style={_styles.bZOCRESv}>
          <Text style={_styles.jlVoLXKj}>Loans Analytics</Text>
          <View style={_styles.xbZIfxeW}>
            <Text style={_styles.eiEoUaMw}>Loan Payment Monitoring</Text>
            <Text>Monitor your existing loan payments, schedules, due dates, and payment history.</Text>
          </View>
          <View style={_styles.VzdxmaGo}>
            <Text style={_styles.tqrHmLIP}>Apply for New Loans</Text>
            <Button title="Apply Now" onPress={() => {}} />
          </View>
          <View style={_styles.gsydnSqM}>
            <Text style={_styles.enPQAViM}>Loan Quotes from Lenders</Text>
            <Text>Compare loan offers and select the most suitable option.</Text>
          </View>
          <View style={_styles.ohahrlnW}>
            <Text style={_styles.FcnBswsk}>Agent Profiles</Text>
            <Image style={_styles.YYJlakyd} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
            <Text>Experience, expertise, and contact details of loan agents.</Text>
          </View>
          <View style={_styles.uFtMpmsq}>
            <Text style={_styles.ITrYJtsu}>Pull-Through Rate Metrics</Text>
            <Text>Assess the success rate of loan applications from initial stages to funding.</Text>
          </View>
          <View style={_styles.PGDDJaXH}>
            <Text style={_styles.iZeYtQqC}>Review Rates and Closing Costs</Text>
            <Text>Review interest rates, closing costs, and other financial details associated with loan offers.</Text>
          </View>
          <View style={_styles.mPFLXpBC}>
            <Text style={_styles.edbzQUmi}>Lock Rate Request</Text>
            <Button title="Lock Rate" onPress={() => {}} />
          </View>
          <View style={_styles.nPfUKCCQ}>
            <Text style={_styles.GulndhQM}>Product and Service Recommendations</Text>
            <Text>Personalized product and service recommendations based on your financial objectives, interests, and spending patterns.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default LoansAnalyticsScreen;

const _styles = StyleSheet.create({
  IjQjDcDY: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  bZOCRESv: {
    padding: 20
  },
  jlVoLXKj: {
    fontSize: 24,
    fontWeight: "bold"
  },
  xbZIfxeW: {
    marginTop: 20
  },
  eiEoUaMw: {
    fontSize: 18,
    fontWeight: "bold"
  },
  VzdxmaGo: {
    marginTop: 20
  },
  tqrHmLIP: {
    fontSize: 18,
    fontWeight: "bold"
  },
  gsydnSqM: {
    marginTop: 20
  },
  enPQAViM: {
    fontSize: 18,
    fontWeight: "bold"
  },
  ohahrlnW: {
    marginTop: 20
  },
  FcnBswsk: {
    fontSize: 18,
    fontWeight: "bold"
  },
  YYJlakyd: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  uFtMpmsq: {
    marginTop: 20
  },
  ITrYJtsu: {
    fontSize: 18,
    fontWeight: "bold"
  },
  PGDDJaXH: {
    marginTop: 20
  },
  iZeYtQqC: {
    fontSize: 18,
    fontWeight: "bold"
  },
  mPFLXpBC: {
    marginTop: 20
  },
  edbzQUmi: {
    fontSize: 18,
    fontWeight: "bold"
  },
  nPfUKCCQ: {
    marginTop: 20
  },
  GulndhQM: {
    fontSize: 18,
    fontWeight: "bold"
  }
});