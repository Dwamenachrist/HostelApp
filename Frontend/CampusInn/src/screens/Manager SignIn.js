import React, { useState,useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { AntDesign } from "@expo/vector-icons";
import Header from '../components/Header';
import { AuthContext } from '../Hooks/AuthContext';

export default function ManagerSignIn({ navigation }) {
  const { loginManager } = useContext(AuthContext); // Remove error from destructuring
  const [user, setUser] = useState({email: "", password: "",})
  const [isLoading, setIsLoading] = useState(false);

  

  if(isLoading) {
    return <View style={{flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}><Text>Loading please wait</Text></View>
  }

  return (
    <View style={styles.container}>
      {/* Image at the Top */}
      <Image source={require('../../assets/manager 1.png')} style={styles.image} />

      <ScrollView>
        <View style={styles.innerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                style={styles.backIcon} // Style for the back icon
                name="leftcircleo"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Header>Manager Sign In</Header>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
               label="Email"
                  returnKeyType="next"
                  value={user.email}
                    onChangeText={(text) => setUser((prev)=> (({
                      ...prev,
                      email: text
                    })))}
                  error={!!user}
                  // errorText={email.error}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
            />
            <TextInput
            label="Password"
                  returnKeyType="done"
                  value={user.password}
                  onChangeText={(text) => setUser((prev)=> (({
                    ...prev,
                    password: text
                  })))}
                  // error={!!password.error}
                  // errorText={password.error}
                  secureTextEntry
            />
          </View>

          {/* "Forgot Password" Link */}
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={()=> loginManager(user.email, user.password, setIsLoading)}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Different background color for Manager page
  },
  image: {
    width: '100%',
    height: 150, // Adjust the height as needed
    resizeMode: 'cover',
  },
  innerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  backIcon: {
    marginRight: 10,
  },
  form: {
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#ff6b6b", // Different color for Manager page
  },
  loginButton: {
    backgroundColor: theme.colors.accent, // Use a different accent color for manager login
    borderRadius: 25,
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
    color: theme.colors.accent, // Different color for Manager page
    fontWeight: "bold",
  },
});
