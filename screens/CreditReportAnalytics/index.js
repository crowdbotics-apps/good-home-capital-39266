import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CreditReportScreen = () => {
  const dummyData = {
    creditSummary: {
      creditUtilization: '30%',
      paymentHistory: '100%',
      openAccounts: 5
    },
    creditScores: {
      transUnion: 750,
      equifax: 740,
      experian: 760
    },
    accountOffers: ['Offer 1', 'Offer 2', 'Offer 3']
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Menu</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Credit Summary</Text>
          <Text>Credit Utilization: {dummyData.creditSummary.creditUtilization}</Text>
          <Text>Payment History: {dummyData.creditSummary.paymentHistory}</Text>
          <Text>Open Accounts: {dummyData.creditSummary.openAccounts}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Credit Scores</Text>
          <Text>TransUnion: {dummyData.creditScores.transUnion}</Text>
          <Text>Equifax: {dummyData.creditScores.equifax}</Text>
          <Text>Experian: {dummyData.creditScores.experian}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Offers</Text>
          {dummyData.accountOffers.map((offer, index) => <Text key={index}>{offer}</Text>)}
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  menu: {
    marginBottom: 20
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 200
  }
});
export default CreditReportScreen;