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

  return <SafeAreaView style={_styles.JVArkocH}>
      <View style={_styles.lBaGiZZD}>
        <Text style={_styles.KVKmFGXh}>User Roles</Text>
        <TextInput style={_styles.zaPcidek} onChangeText={text => setRoleName(text)} value={roleName} placeholder="Role Name" />
        <TextInput style={_styles.orlNhLtE} onChangeText={text => setRoleDescription(text)} value={roleDescription} placeholder="Role Description" />
        <Button title="Add Role" onPress={addRole} />
        <FlatList data={roles} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View style={_styles.iiiAmEfR}>
              <Text style={_styles.KaUeMZmN}>{item.name}</Text>
              <Text>{item.description}</Text>
              <TouchableOpacity style={_styles.QUoEZWfp}>
                <Text style={_styles.BsgPAmcE}>Delete Role</Text>
              </TouchableOpacity>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default UserRolesScreen;

const _styles = StyleSheet.create({
  JVArkocH: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  lBaGiZZD: {
    padding: 20
  },
  KVKmFGXh: {
    fontSize: 24,
    fontWeight: "bold"
  },
  zaPcidek: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  orlNhLtE: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  iiiAmEfR: {
    marginTop: 20,
    backgroundColor: "#ddd",
    padding: 20
  },
  KaUeMZmN: {
    fontSize: 18,
    fontWeight: "bold"
  },
  QUoEZWfp: {
    marginTop: 10,
    backgroundColor: "red",
    padding: 10
  },
  BsgPAmcE: {
    color: "white"
  }
});