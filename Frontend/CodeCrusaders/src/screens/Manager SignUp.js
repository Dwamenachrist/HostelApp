// components/ManagerSignUp.js

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import * as ImagePicker from 'expo-image-picker'; // Import image picker

export default function ManagerSignUp({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
  const [businessCertificate, setBusinessCertificate] = useState(null);

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError =
      password.value !== confirmPassword.value ? "Passwords don't match" : '';

    if (emailError || passwordError || nameError || confirmPasswordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setBusinessCertificate(result.assets[0].uri); // Updated for latest Expo SDK format
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/manager 1.png')}
        style={styles.image}
      />

        <Text style={styles.title}>Hostel Manager Registration</Text>
        <TextInput
          label="Full Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Create Password"
          returnKeyType="next"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          returnKeyType="done"
          value={confirmPassword.value}
          onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
          error={!!confirmPassword.error}
          errorText={confirmPassword.error}
          secureTextEntry
        />
        <View style={styles.uploadContainer}>
          <Text style={styles.label}>Upload picture of business certificate</Text>
          <TouchableOpacity onPress={pickImage}>
            <Ionicons name="add-circle-outline" size={32} color="black" style={styles.uploadIcon} />
          </TouchableOpacity>
          {businessCertificate && (
            <Image source={{ uri: businessCertificate }} style={styles.previewImage} />
          )}
        </View>
        <Button mode="contained" onPress={onSignUpPressed} style={styles.button}>
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('SignInScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efe8e8',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  uploadIcon: {
    marginTop: -10,
  },
  previewImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 25,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});
