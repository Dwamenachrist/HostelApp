import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Expo Icons

export default function RoomScreen({ navigation }) {
    const rooms = [
        { id: '1', name: 'Room 10C', ac: '1 in a room with AC', status: 'Occupied', price: 'GHC12,000.00', image: require('../assets/1bed.png') },
        { id: '2', name: 'Room 7A', ac: '1 in a room no AC', status: 'Occupied', price: 'GHC10,000.00', image: require('../assets/1bed.png') },
        { id: '3', name: 'Room 5B', ac: '1 in a room with AC', status: 'Available', price: 'GHC12,000.00', image: require('../assets/1bed.png') },
        { id: '4', name: 'Room 4A', ac: '1 in a room with AC', status: 'Occupied', price: 'GHC12,000.00', image: require('../assets/1bed.png') },
        { id: '5', name: 'Room 3B', ac: '1 in a room no AC', status: 'Available', price: 'GHC10,000.00', image: require('../assets/1bed.png') },
        { id: '6', name: 'Room 10C', ac: '1 in a room with AC', status: 'Occupied', price: 'GHC12,000.00', image: require('../assets/1bed.png') },
        { id: '7', name: 'Room 7A', ac: '1 in a room no AC', status: 'Occupied', price: 'GHC10,000.00', image: require('../assets/1bed.png') },
        { id: '8', name: 'Room 5B', ac: '1 in a room with AC', status: 'Available', price: 'GHC12,000.00', image: require('../assets/1bed.png') },
        { id: '9', name: 'Room 4A', ac: '1 in a room with AC', status: 'Occupied', price: 'GHC12,000.00', image: require('../assets/1bed.png') },
        { id: '10', name: 'Room 3B', ac: '1 in a room no AC', status: 'Available', price: 'GHC10,000.00', image: require('../assets/1bed.png') },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Makassela Hostel</Text>
            </View>

            <Text style={styles.subHeader}>Rooms</Text>

            {rooms.map((room) => (
                <View key={room.id} style={styles.roomCard}>
                    <Image source={room.image} style={styles.roomImage} />
                    <View style={styles.roomInfo}>
                        <Text style={styles.roomName}>{room.name}</Text>
                        <Text>{room.ac}</Text>
                        <Text>{room.status}</Text>
                        <Text style={styles.roomPrice}>{room.price}</Text>
                    </View>
                </View>
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