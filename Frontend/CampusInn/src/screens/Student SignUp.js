import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../components/AuthContext';
import emailValidator from '../helpers/emailValidator';
import passwordValidator from '../helpers/passwordValidator';
import  nameValidator  from '../helpers/nameValidator';


export default function StudentSignUp({ navigation }) {
  const { signUp } = useContext(AuthContext);
  const [fullName, setFullName] = useState({ value: '', error: '' });
  const [school, setSchool] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
  const [studentIdImage, setStudentIdImage] = useState(null);
  const [error, setError] = useState('');

  const onSignUpPressed = async () => {
    setError('');  // Reset error state on submission

    // Validation
    const fullNameError = nameValidator(fullName.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (password.value !== confirmPassword.value) {
      setError('Passwords do not match');
      return;
    }

    if (fullNameError || emailError || passwordError) {
      setFullName({ ...fullName, error: fullNameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    if (!studentIdImage) {
      setError('Please upload a picture of your student ID');
      return;
    }

    try {
      await signUp(email.value, password.value, fullName.value, school.value, studentIdImage);
      navigation.navigate("TabNavigator", { screen: "Hostel" });
    } catch (err) {
      setError(err.message || 'Failed to sign up. Please try again.');
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setStudentIdImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Image source={require("../../assets/book.png")} style={styles.image} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Student Registration</Text>

          <View style={styles.form}>
            <TextInput
              label="Full Name"
              returnKeyType="next"
              value={fullName.value}
              onChangeText={(text) => setFullName({ value: text, error: '' })}
              error={!!fullName.error}
              errorText={fullName.error}
            />
            <TextInput
              label="School"
              returnKeyType="next"
              value={school.value}
              onChangeText={(text) => setSchool({ value: text, error: '' })}
              error={!!school.error}
              errorText={school.error}
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
              label="Password"
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
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
              <Text>Upload picture of student ID/Ghana Card</Text>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Display error if any */}
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Button
            mode="contained"
            onPress={onSignUpPressed}
            style={styles.signUpButton}
          >
            Continue
          </Button>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace("StudentSignIn")}>
              <Text style={styles.loginLink}>Login</Text>
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
    borderWidth: 2,
    borderColor: "gray",
   
    marginBottom: 20,
    padding: 1,
    borderRadius: 10,
  },
  imagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signUpButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 25,
    padding: 10,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "#7C7C7C",
  },
  loginLink: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
