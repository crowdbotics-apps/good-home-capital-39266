import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const UserRolesScreen = () => {
  const [roleName, setRoleName] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [roles, setRoles] = useState([]);

  const addRole = () => {
    setRoles([...roles, {
      name: roleName,
      description: roleDescription
    }]);
    setRoleName('');
    setRoleDescription('');
  };

  return <SafeAreaView style={_styles.YwfHKYQJ}>
      <View style={_styles.hPtJLTpr}>
        <Text style={_styles.BdcLjacm}>User Roles</Text>
        <TextInput style={_styles.VLGhgDsq} onChangeText={text => setRoleName(text)} value={roleName} placeholder="Role Name" />
        <TextInput style={_styles.WWnUfWsi} onChangeText={text => setRoleDescription(text)} value={roleDescription} placeholder="Role Description" />
        <Button title="Add Role" onPress={addRole} />
        <FlatList data={roles} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View style={_styles.ZvZIttHb}>
              <Text style={_styles.mrqZifmH}>{item.name}</Text>
              <Text>{item.description}</Text>
              <TouchableOpacity style={_styles.akqqXBHt}>
                <Text style={_styles.InVjYsog}>Delete Role</Text>
              </TouchableOpacity>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default UserRolesScreen;

const _styles = StyleSheet.create({
  YwfHKYQJ: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  hPtJLTpr: {
    padding: 20
  },
  BdcLjacm: {
    fontSize: 24,
    fontWeight: "bold"
  },
  VLGhgDsq: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  WWnUfWsi: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  ZvZIttHb: {
    marginTop: 20,
    backgroundColor: "#ddd",
    padding: 20
  },
  mrqZifmH: {
    fontSize: 18,
    fontWeight: "bold"
  },
  akqqXBHt: {
    marginTop: 10,
    backgroundColor: "red",
    padding: 10
  },
  InVjYsog: {
    color: "white"
  }
});