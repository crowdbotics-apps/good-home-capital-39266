import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const InvestmentsScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const investments = [{
    name: 'Investment 1',
    balance: 5000,
    performance: '+5%'
  }, {
    name: 'Investment 2',
    balance: 3000,
    performance: '-2%'
  }, {
    name: 'Investment 3',
    balance: 7000,
    performance: '+10%'
  }];
  return <SafeAreaView style={_styles.ATvnhtYx}>
      <View style={_styles.OGRdjdux}>
        {sidebarOpen && <View style={_styles.bkfLmdtG}>
            <Text>Menu</Text>
          </View>}
        <View style={_styles.jVDBdNXP}>
          <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)}>
            <Text style={_styles.sLPAQowd}>☰</Text>
          </TouchableOpacity>
          <ScrollView>
            {investments.map((investment, index) => <View key={index} style={_styles.XUMgoqAo}>
                <Text style={_styles.dAtNqBNj}>{investment.name}</Text>
                <Text>Balance: ${investment.balance}</Text>
                <Text>Performance: {investment.performance}</Text>
              </View>)}
            <View style={_styles.mPeAPWlv}>
              <Text style={_styles.pMaNzVYt}>Overall Portfolio</Text>
              <Text>Total Value: ${investments.reduce((total, investment) => total + investment.balance, 0)}</Text>
            </View>
            <View style={_styles.uOFuZtaw}>
              <Text style={_styles.egIATjUn}>Balance Chart</Text>
              <Image style={_styles.fBDPgLrv} source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} />
            </View>
            <View style={_styles.FvHctDBZ}>
              <Text style={_styles.GxwAwyfA}>Recommended Products</Text>
              <Text>Product 1</Text>
              <Text>Product 2</Text>
              <Text>Product 3</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>;
};

export default InvestmentsScreen;

const _styles = StyleSheet.create({
  ATvnhtYx: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  OGRdjdux: {
    flex: 1,
    flexDirection: "row"
  },
  bkfLmdtG: {
    width: "20%",
    backgroundColor: "#fff",
    padding: 20
  },
  jVDBdNXP: {
    flex: 1,
    padding: 20
  },
  sLPAQowd: {
    fontSize: 24
  },
  XUMgoqAo: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  dAtNqBNj: {
    fontSize: 18
  },
  mPeAPWlv: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  pMaNzVYt: {
    fontSize: 18
  },
  uOFuZtaw: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  egIATjUn: {
    fontSize: 18
  },
  fBDPgLrv: {
    width: "100%",
    height: 200
  },
  FvHctDBZ: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  GxwAwyfA: {
    fontSize: 18
  }
});