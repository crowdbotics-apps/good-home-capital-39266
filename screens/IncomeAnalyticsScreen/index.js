import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';

const IncomeAnalyticsScreen = () => {
  const dummyData = {
    incomeSources: [{
      id: '1',
      name: 'Job',
      amount: 5000
    }, {
      id: '2',
      name: 'Freelance',
      amount: 2000
    }, {
      id: '3',
      name: 'Investments',
      amount: 3000
    }],
    employmentHistory: [{
      id: '1',
      employer: 'Company A',
      title: 'Developer',
      duration: '2 years'
    }, {
      id: '2',
      employer: 'Company B',
      title: 'Senior Developer',
      duration: '3 years'
    }],
    offers: [{
      id: '1',
      name: 'Investment A',
      description: 'Invest and grow your income'
    }, {
      id: '2',
      name: 'Investment B',
      description: 'Secure your future with our plan'
    }]
  };
  return <SafeAreaView style={_styles.DRGTWnUt}>
      <View style={_styles.IAQkpiwX}>
        <Text style={_styles.DMJEkgLv}>Income Breakdown</Text>
        <FlatList data={dummyData.incomeSources} renderItem={({
        item
      }) => <View style={_styles.lIbfaQvO}>
              <Text>{item.name}</Text>
              <Text>${item.amount}</Text>
            </View>} keyExtractor={item => item.id} />

        <Text style={_styles.GHFdEuul}>Employment History</Text>
        <FlatList data={dummyData.employmentHistory} renderItem={({
        item
      }) => <View style={_styles.VpChaKkj}>
              <Text>{item.employer}</Text>
              <Text>{item.title}</Text>
              <Text>{item.duration}</Text>
            </View>} keyExtractor={item => item.id} />

        <Text style={_styles.UumkWSfi}>Offers</Text>
        <FlatList data={dummyData.offers} renderItem={({
        item
      }) => <View style={_styles.FYdIMbXo}>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Button title="Explore" onPress={() => {}} />
            </View>} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

export default IncomeAnalyticsScreen;

const _styles = StyleSheet.create({
  DRGTWnUt: {
    flex: 1,
    padding: 20
  },
  IAQkpiwX: {
    flex: 1
  },
  DMJEkgLv: {
    fontSize: 24,
    fontWeight: "bold"
  },
  lIbfaQvO: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  GHFdEuul: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  VpChaKkj: {
    marginVertical: 10
  },
  UumkWSfi: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  FYdIMbXo: {
    marginVertical: 10
  }
});