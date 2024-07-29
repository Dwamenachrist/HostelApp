import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Header from '../components/Header';

const ManagerWelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Image 
        source={require('../assets/Frame.png')} 
        style={styles.image}
        resizeMode="contain"
      /> */}
      <View style={styles.textContainer}>
        <Header >Welcome!</Header>
        <Text style={styles.subtitle}>Sign in or create a new account</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('ManagerSignIn')}>
          Sign In
        </Button>
        <Button
        mode="outlined"
        onPress={() => navigation.navigate('ManagerSignUp')}
      >
        Sign Up
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 40,
  },
  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
});

export default ManagerWelcomeScreen;
