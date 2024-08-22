import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../Hooks/AuthContext';


export default function StudentSignUp({ navigation }) {
  const { signUp } = useContext(AuthContext);
  const [user, setUser] = useState({firstName: "", lastName: "", email: "", password: "", phoneNumber: ""});
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
  const [studentIdImage, setStudentIdImage] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

    // if (!studentIdImage) {
    //   setError('Please upload a picture of your student ID');
    //   return;
    // }


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
  if(isLoading) {
    return <View style={{flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}><Text>Loading please wait</Text></View>
  }
  return (
    <>
      <Image source={require("../../assets/book.png")} style={styles.image} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Student Registration</Text>

          <View style={styles.form}>
            <TextInput
              label="first name"
              returnKeyType="next"
              value={user.firstName}
              onChangeText={(text) => setUser((prev)=> (({
                ...prev,
                firstName: text
              })))}
            />
            <TextInput
              label="last Name"
              returnKeyType="next"
              value={user.lastName}
              onChangeText={(text) => setUser((prev) => (({
                ...prev,
                lastName: text
              })))}
            />
            <TextInput
              label="Email"
              returnKeyType="next"
              value={user.email}
              onChangeText={(text) => setUser((prev=> (({
                ...prev,
                email: text
              }))))}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              label="Phone Number"
              returnKeyType="next"
              value={user.phoneNumber}
              onChangeText={(text) => setUser((prev=> (({
                ...prev,
                phoneNumber: text
              }))))}
              autoCapitalize="none"
            />
            <TextInput
              label="Password"
              returnKeyType="next"
              value={user.password}
              onChangeText={(text) => setUser((prev)=> (({
                ...prev,
                password: text,
              })))}
              secureTextEntry
            />
            {/* <TextInput
              label="Confirm Password"
              returnKeyType="done"
              value={confirmPassword.value}
              onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
              error={!!confirmPassword.error}
              errorText={confirmPassword.error}
              secureTextEntry
            /> */}
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
              <Text>Upload picture of student ID/Ghana Card</Text>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Display error if any */}
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Button
            mode="contained"
            onPress={() => signUp(user.firstName, user.lastName, user.email, user.phoneNumber, user.password, setIsLoading)}
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
