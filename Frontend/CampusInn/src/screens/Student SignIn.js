import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { AuthContext } from '../components/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';

export default function StudentSignIn({ navigation }) {
  const { login } = useContext(AuthContext); // Remove error from destructuring
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [rememberMe, setRememberMe] = useState(false);

  const onLoginPressed = async () => {
    // Validate email and password
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      await login(email.value, password.value);

      // Handle Remember Me functionality
      if (rememberMe) {
        await AsyncStorage.setItem('rememberMe', JSON.stringify(true));
        await AsyncStorage.setItem('userEmail', email.value);
      } else {
        await AsyncStorage.removeItem('rememberMe');
        await AsyncStorage.removeItem('userEmail');
      }

      navigation.navigate('TabNavigator', { screen: 'Hostel' });
    } catch (err) {
      console.error(err);
      Alert.alert('Login Error', err.message || 'Failed to log in. Please try again.');
    }
  };

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
                onPress={onLoginPressed}
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
