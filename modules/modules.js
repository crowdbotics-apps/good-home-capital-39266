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
  return <SafeAreaView style={_styles.NWyUfqws}>
      <View style={_styles.IvZXFIib}>
        {sidebarOpen && <View style={_styles.MHoyvNWG}>
            <Text>Menu</Text>
          </View>}
        <View style={_styles.mtSFLWFI}>
          <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)}>
            <Text style={_styles.buTTZgiG}>☰</Text>
          </TouchableOpacity>
          <ScrollView>
            {investments.map((investment, index) => <View key={index} style={_styles.FnydgWis}>
                <Text style={_styles.OWJijULF}>{investment.name}</Text>
                <Text>Balance: ${investment.balance}</Text>
                <Text>Performance: {investment.performance}</Text>
              </View>)}
            <View style={_styles.BTGNdTNT}>
              <Text style={_styles.UKGHBeDo}>Overall Portfolio</Text>
              <Text>Total Value: ${investments.reduce((total, investment) => total + investment.balance, 0)}</Text>
            </View>
            <View style={_styles.tmqfJubi}>
              <Text style={_styles.BhHuilLC}>Balance Chart</Text>
              <Image style={_styles.VbGcZoVX} source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} />
            </View>
            <View style={_styles.deKKPkQd}>
              <Text style={_styles.iprTCvdG}>Recommended Products</Text>
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
  NWyUfqws: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  IvZXFIib: {
    flex: 1,
    flexDirection: "row"
  },
  MHoyvNWG: {
    width: "20%",
    backgroundColor: "#fff",
    padding: 20
  },
  mtSFLWFI: {
    flex: 1,
    padding: 20
  },
  buTTZgiG: {
    fontSize: 24
  },
  FnydgWis: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  OWJijULF: {
    fontSize: 18
  },
  BTGNdTNT: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  UKGHBeDo: {
    fontSize: 18
  },
  tmqfJubi: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  BhHuilLC: {
    fontSize: 18
  },
  VbGcZoVX: {
    width: "100%",
    height: 200
  },
  deKKPkQd: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20
  },
  iprTCvdG: {
    fontSize: 18
  }
});