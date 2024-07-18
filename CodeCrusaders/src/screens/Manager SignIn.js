import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { AntDesign } from "@expo/vector-icons";
import Header from '../components/Header'

export default function ManagerSignIn({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    // Add your actual login logic here
    console.log("Login button pressed!");
    // After successful login, navigate to Home
    navigation.navigate("ManagerUpload");
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={{ marginRight: 10 }} // Style for the TouchableOpacity
            name="leftcircleo"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Header>Welcome Back</Header>
      </View>

      {/* Form */}
      <View style={styles.form}>
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
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      </View>

      {/* "Forgot Password" Link */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ResetPasswordScreen")}
        style={styles.forgotPassword}
      >
        <Text style={{ color: "#7C7C7C" }}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Button
        mode="contained"
        onPress={onLoginPressed}
        style={styles.loginButton} // Style for the login button
      >
        Login
      </Button>

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40, // Increased margin for spacing
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20, // Added margin between input fields
    padding: 1,
    borderRadius: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end", // Align to the right
  },
  loginButton: {
    backgroundColor: theme.colors.primary, // Use your theme color
    borderRadius: 25, // Make the button rounded
    padding: 10,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signupText: {
    color: "#7C7C7C",
  },
  signupLink: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});