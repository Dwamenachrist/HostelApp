import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Expo Icons

export default function Facilities({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>FACILITIES</Text>
      </View>

      {/* Library Image - Navigate to Fdetails Screen */}
      <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Fdetails')}>
        <Image source={require('../assets/Library.png')} style={styles.image} />
        <Text style={styles.roomText}>LIBRARY</Text>
      </TouchableOpacity>

      {/* Other Facilities */}
      <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '2 in a room' })}>
        <Image source={require('../assets/Studyroom.png')} style={styles.image} />
        <Text style={styles.roomText}>STUDY ROOM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '3 in a room' })}>
        <Image source={require('../assets/Canteen.png')} style={styles.image} />
        <Text style={styles.roomText}>CANTEEN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '4 in a room' })}>
        <Image source={require('../assets/Shuttle.png')} style={styles.image} />
        <Text style={styles.roomText}>SHUTTLE</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 45,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  roomType: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  roomText: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    top: '45%',
  },
});
