import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UploadHostelScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Upload Hostel</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel name</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel location</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel details</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Types of rooms available</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of rooms available</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.uploadContainer}>
        <Text style={styles.label}>Upload picture of hostel</Text>
        <Ionicons name="add-circle-outline" size={32} color="black" style={{marginTop: -10}} />
      </View>

      <TouchableOpacity 
	  style={styles.button}
	  onPress={() => navigation.navigate('UploadHdetails')}
	  >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '800',
    marginLeft: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    borderColor: 'black',
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#10b8e8',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UploadHostelScreen;