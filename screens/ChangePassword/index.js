import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {// Handle password change logic here
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} secureTextEntry placeholder="Current Password" value={currentPassword} onChangeText={setCurrentPassword} />
      <TextInput style={styles.input} secureTextEntry placeholder="New Password" value={newPassword} onChangeText={setNewPassword} />
      <TextInput style={styles.input} secureTextEntry placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} />
      <View style={styles.buttonContainer}>
        <Button title="Change Password" onPress={handleChangePassword} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default ChangePasswordScreen;