import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, TouchableOpacity, Image } from 'react-native';

const UserScreen = () => {
  const [users, setUsers] = useState([{
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'User',
    status: 'Inactive',
    image: 'https://tinyurl.com/42evm3m3'
  }]);

  const renderItem = ({
    item
  }) => <View style={_styles.JyKuIjlp}>
      <Image source={{
      uri: item.image
    }} style={_styles.xYmGgNDZ} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
      <Text>{item.role}</Text>
      <Text>{item.status}</Text>
      <TouchableOpacity style={_styles.CjzZTVxb}>
        <Text style={_styles.LhRuLnds}>Edit</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={_styles.kjJSlsst}>
      <Text style={_styles.sqpjQQta}>User Management</Text>
      <TextInput placeholder="Search user" style={_styles.wdUGxqeF} />
      <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.email} />
      <Button title="Add User" onPress={() => {}} />
    </SafeAreaView>;
};

export default UserScreen;

const _styles = StyleSheet.create({
  JyKuIjlp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  xYmGgNDZ: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  CjzZTVxb: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  LhRuLnds: {
    color: "#fff"
  },
  kjJSlsst: {
    flex: 1,
    padding: 20
  },
  sqpjQQta: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  wdUGxqeF: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5
  }
});