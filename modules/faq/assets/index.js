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
  }) => <View style={_styles.wJpNxgOr}>
      <Image source={{
      uri: item.image
    }} style={_styles.ZZlHDwcn} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
      <Text>{item.role}</Text>
      <Text>{item.status}</Text>
      <TouchableOpacity style={_styles.zzAijsfG}>
        <Text style={_styles.DjGNgUbG}>Edit</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={_styles.nMcGnWef}>
      <Text style={_styles.yLqyEVpT}>User Management</Text>
      <TextInput placeholder="Search user" style={_styles.RZPmJkBP} />
      <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.email} />
      <Button title="Add User" onPress={() => {}} />
    </SafeAreaView>;
};

export default UserScreen;

const _styles = StyleSheet.create({
  wJpNxgOr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  ZZlHDwcn: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  zzAijsfG: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  DjGNgUbG: {
    color: "#fff"
  },
  nMcGnWef: {
    flex: 1,
    padding: 20
  },
  yLqyEVpT: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  RZPmJkBP: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5
  }
});