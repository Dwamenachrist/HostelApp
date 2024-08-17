import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ViewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>Hostel Location</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total number of rooms</Text>
        <Text style={styles.infoNumber}>14</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Vacant rooms</Text>
        <Text style={styles.infoNumber}>6</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Occupied rooms</Text>
        <Text style={styles.infoNumber}>8</Text>
      </View>
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => {
          navigation.navigate("AddRoom")
        }}
      >
        <Text style={styles.buttonText}>Add a room</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  location: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 16,
  },
  infoNumber: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    backgroundColor: '#00aaff',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ViewScreen;
