import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker'; // Import image picker

export default function StudentSignUp({ navigation }) {
  const [fullName, setFullName] = useState({ value: '', error: '' });
  const [school, setSchool] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
  const [studentIdImage, setStudentIdImage] = useState(null);

  const onSignUpPressed = () => {
    // Add your actual signup logic here
    console.log("Sign Up button pressed!");
    // After successful signup, navigate to Home
    navigation.navigate("TabNavigator", { screen: "Hostel" });
  }

  const pickImage = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.canceled) {
      setStudentIdImage(result.uri);
    }
  };

  return (
    <>
    <Image source={require("../../assets/book.png")} style={styles.image} />
    <ScrollView>
    <View style={styles.container}>  
      
      {/* Title */}
      <Text style={styles.title}>Student Registration</Text>

      {/* Form */}
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
        {/* Image Picker */}
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <AntDesign name="pluscircleo" size={24} color="black" />
          <Text>Upload picture of student ID</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={styles.signUpButton} // Style for the signup button
      >
        Continue
      </Button>

      {/* Login Link */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
  },
  image: {
    width: '100%', // Adjust as needed
    height: 200, // Adjust as needed
    resizeMode: 'cover', // Adjust as needed
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
    borderColor: "gray",
    marginBottom: 20, // Added margin between input fields
    padding: 1,
    borderRadius: 10,
  },
  imagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: theme.colors.primary, // Use your theme color
    borderRadius: 25, // Make the button rounded
    padding: 10,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#7C7C7C",
  },
  loginLink: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});
