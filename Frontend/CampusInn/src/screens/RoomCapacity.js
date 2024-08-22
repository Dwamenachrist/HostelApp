import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Expo Icons

export default function RoomTypesScreen({ navigation, route }) {
  const rooms = route.params
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>ROOM TYPES</Text>
      </View>

      {/* Room Type 1 */}
      {rooms?.map((data)=> (
        <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('HostelBookingInfo', rooms)}>
          <Image source={{uri: data?.images[0]}} style={styles.image} />
        <Text style={styles.roomText}>{data?.capacity} IN A ROOM</Text>
      </TouchableOpacity>
      ))}
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
    color: 'black',
    top: '45%',
  },
});

