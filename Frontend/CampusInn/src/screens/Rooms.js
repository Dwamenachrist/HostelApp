import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function RoomScreen({ navigation, route }) {
  const { roomType, hostelName, hostelRating } = route.params;

  const rooms = [
    // 1 in a room (existing)
    { id: '1', name: 'Room 10C', ac: '1 in a room with AC', status: 'Occupied', price: 12000, image: require('../assets/1bed.png') },
    { id: '2', name: 'Room 7A', ac: '1 in a room no AC', status: 'Occupied', price: 10000, image: require('../assets/1bed.png') },
    { id: '3', name: 'Room 5B', ac: '1 in a room with AC', status: 'Available', price: 12000, image: require('../assets/1bed.png') },
    { id: '4', name: 'Room 4A', ac: '1 in a room with AC', status: 'Occupied', price: 12000, image: require('../assets/1bed.png') },
    { id: '5', name: 'Room 3B', ac: '1 in a room no AC', status: 'Available', price: 10000, image: require('../assets/1bed.png') },

    // 2 in a room (new)
    { id: '6', name: 'Room 201', ac: '2 in a room with AC', status: 'Available', price: 18000, image: require('../assets/2bed.png') }, // Replace with actual 2-bed image
    { id: '7', name: 'Room 202', ac: '2 in a room no AC', status: 'Occupied', price: 15000, image: require('../assets/2bed.png') },

    // 3 in a room (new)
    { id: '8', name: 'Room 301', ac: '3 in a room with AC', status: 'Occupied', price: 21000, image: require('../assets/3bed.png') }, // Replace with actual 3-bed image
    { id: '9', name: 'Room 302', ac: '3 in a room no AC', status: 'Available', price: 18000, image: require('../assets/3bed.png') },

    // 4 in a room (new)
    { id: '10', name: 'Room 401', ac: '4 in a room with AC', status: 'Available', price: 24000, image: require('../assets/4bed.png') }, // Replace with actual 4-bed image
  ];

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{hostelName}</Text>
        </View>

        <Text style={styles.subHeader}>Rooms</Text>

        {rooms
            .filter(room => room.ac.includes(roomType))
            .map((room) => (
                <TouchableOpacity
                    key={room.id}
                    style={styles.roomCard}
                    onPress={() =>
                        navigation.navigate('HostelBookingInfo', {
                          room: room.name,
                          roomId: room.id,
                          ac: room.ac,
                          status: room.status,
                          price: room.price, // Ensure this is a number
                          image: room.image,
                          hostel: hostelName,
                          rating: hostelRating,
                          availableRooms: room.status === 'Available' ? 1 : 0,
                        })
                    }
                >
                  <Image source={room.image} style={styles.roomImage} />
                  <View style={styles.roomInfo}>
                    <Text style={styles.roomName}>{room.name}</Text>
                    <Text>{room.ac}</Text>
                    <Text>{room.status}</Text>
                    <Text style={styles.roomPrice}>GHC {room.price.toFixed(2)}</Text>
                  </View>
                </TouchableOpacity>
            ))}
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 45,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
    marginLeft: 80,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
    marginLeft: 170,
  },
  roomCard: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
  },
  roomImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  roomInfo: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10b8e8',
    textAlign: 'right',
  },
});
