import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { AuthContext } from '../Hooks/AuthContext';

export default function StudentSignIn({ navigation }) {
  const { login } = useContext(AuthContext); // Remove error from destructuring
  const [user, setUser] = useState({email: "", password: "",})
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading) {
    return <View style={{flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}><Text>Loading please wait</Text></View>
  }
  return (
      <>
        {/* Image at the Top */}
        <Image source={require('../../assets/book.png')} style={styles.image} />

        <ScrollView>
          <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Welcome Back</Text>

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

              {/* Remember Me Checkbox */}
              <View style={styles.rememberMeContainer}>
                <Checkbox
                    status={rememberMe ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setRememberMe(!rememberMe);
                    }}
                />
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </View>
            </View>

            {/* "Forgot Password" Link */}
            <TouchableOpacity
                onPress={() => navigation.navigate('ResetPasswordScreen')}
                style={styles.forgotPassword}
            >
              <Text style={{ color: '#7C7C7C' }}>Forgot your password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <Button

                mode="contained"
                onPress={()=> login(user.email, user.password, setIsLoading)}
                style={styles.loginButton} // Style for the login button
            >
              Login
            </Button>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.replace('StudentSignUp')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 1,
    borderRadius: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rememberMeText: {
    marginLeft: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 25,
    padding: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#7C7C7C',
  },
  signupLink: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});
