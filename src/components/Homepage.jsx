import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground source={require('../../assets/pic1.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>The Perfect Match:{"\n"}Students & Hostels,{"\n"}Connected</Text>
        <Text style={styles.subtitle}>
          Find your ideal stay or fill your{"\n"}rooms - it’s that easy!{"\n\n"}
          Students: Discover the perfect hostel{"\n"}near your school, compare prices and{"\n"}reviews, and book instantly.{"\n\n"}
          Hostel Managers: Reach thousands of{"\n"}students, fill your rooms faster, and{"\n"}manage bookings seamlessly.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get started </Text>
          <Image source={require('../../assets/arrow.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 200, 
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10b8e8',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
});

export default HomeScreen;
