import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Date of Birth</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
        <Button title="Calendar" onPress={() => setDate(new Date())} />
        <DateTimePicker testID="dateTimePicker" value={date} mode="date" display="default" onChange={onChange} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    fontSize: 18,
    marginBottom: 20
  }
});
export default App;