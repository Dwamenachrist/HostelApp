import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CongratsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/flight.png')} style={styles.image} />
      <Text style={styles.title}>Congratulations!!</Text>
      <Text style={styles.subtitle}>Your hostel stay is secured.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>BACK TO HOME</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300, 
    marginBottom: 70,
    marginTop: 90,
  },
  title: {
    color: '#10b8e8',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
   
  },
  button: {
    backgroundColor: '#10b8e8',
    paddingHorizontal: 100,
    paddingVertical: 16,
    borderRadius: 15,
    marginTop: 110,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CongratsScreen;
