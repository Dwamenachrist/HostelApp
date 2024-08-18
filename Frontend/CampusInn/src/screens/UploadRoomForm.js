import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const UploadRoomScreen = ({ navigation }) => {
  const [hostelName, setHostelName] = useState('');
  const [hostelLocation, setHostelLocation] = useState('');
  const [hostelDescription, setHostelDescription] = useState('');
  const [hostelImage, setHostelImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setHostelImage(result.assets[0].uri);
    }
  };

  const handleContinue = () => {
    if (hostelName && hostelLocation && hostelDescription && hostelImage) {
      navigation.navigate('UploadRoom', {
        hostelName,
        hostelLocation,
        hostelDescription,
        hostelImage,
      });
    } else {
      alert('Please fill in all fields and upload an image.');
    }
  };

  return (
      <>
        <View style={styles.headerRow}>
          <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
          <Text style={styles.headerText}>Upload Room</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Types of room</Text>
            <TextInput
                style={styles.input}
                value={hostelName}
                onChangeText={setHostelName}
                placeholder="Enter hostel name"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Room number</Text>
            <TextInput
                style={styles.input}
                value={hostelLocation}
                onChangeText={setHostelLocation}
                placeholder="Enter hostel location"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Hostel details</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={hostelDescription}
                onChangeText={setHostelDescription}
                placeholder="Enter a brief description"
                multiline={true}
                numberOfLines={4}
            />
          </View>

          <View style={styles.uploadContainer}>
            <Text style={styles.label}>Upload Picture of Room</Text>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons name="add-circle-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>

          {hostelImage && (
              <Image source={{ uri: hostelImage }} style={styles.imagePreview} />
          )}
        </ScrollView>
        <TouchableOpacity
            style={styles.button}
            onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1, // Ensures the ScrollView takes up available space
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
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Align text at the top in multiline input
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#10b8e8',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UploadRoomScreen;
