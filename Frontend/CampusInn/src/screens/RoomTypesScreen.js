import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Expo Icons

export default function RoomTypesScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>ROOM TYPES</Text>
            </View>

            {/* Room Type 1 */}
            <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '1 in a room' })}>
                <Image source={require('../assets/1bed.png')} style={styles.image} />
                <Text style={styles.roomText}>1 IN A ROOM</Text>
            </TouchableOpacity>

            {/* Room Type 2 */}
            <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '2 in a room' })}>
                <Image source={require('../assets/2bed.png')} style={styles.image} />
                <Text style={styles.roomText}>2 IN A ROOM</Text>
            </TouchableOpacity>

            {/* Room Type 3 */}
            <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '3 in a room' })}>
                <Image source={require('../assets/3bed.png')} style={styles.image} />
                <Text style={styles.roomText}>3 IN A ROOM</Text>
            </TouchableOpacity>

            {/* Room Type 4 */}
            <TouchableOpacity style={styles.roomType} onPress={() => navigation.navigate('Rooms', { roomType: '4 in a room' })}>
                <Image source={require('../assets/4bed.png')} style={styles.image} />
                <Text style={styles.roomText}>4 IN A ROOM</Text>
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
        color: 'black',
        top: '45%',
    },
});