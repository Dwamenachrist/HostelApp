// src/components/Splash.js
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); 
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>CampusInn Hostel Booking</Text>
        <Text style={styles.title}>Booking</Text>
      </View>
      <Image source={require('../../assets/Rec1.png')} style={styles.bottomImage} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '40%',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomImage: {
    width: '100%',
    resizeMode: 'contain',
  },
});

export default Splash;