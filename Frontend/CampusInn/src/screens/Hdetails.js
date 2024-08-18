import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const Hdetails = ({ route }) => {
  const { hostel } = route.params;
  const navigation = useNavigation();

  const roomTypes = [
    { name: '1 in a room', price: 10000, image: require('../../assets/room1.png') },
    { name: '2 in a room', price: 8000, image: require('../../assets/room2.png') },
    { name: '3 in a room', price: 6000, image: require('../../assets/room3.png') },
    { name: '4 in a room', price: 4000, image: require('../../assets/room4.png') },
  ];

  const handleRoomPress = (room) => {
    navigation.navigate('HostelBookingInfo', {
      room: room.name,
      price: room.price,
      image: room.image,
      hostel: hostel.name,
      rating: hostel.rating,
    });
  };


  return (
      <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={hostel.image} style={styles.hostelImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.hostelName}>{hostel.name}</Text>
          <View style={styles.row}>
            <View style={styles.reviewContainer}>
              <Ionicons name="star" size={20} color="gold" />
              <Text style={styles.reviewText}>{hostel.rating} (120 Reviews)</Text>
            </View>
            <TouchableOpacity
                style={styles.facilitiesButton}
                onPress={() => navigation.navigate('Facilities')}>
              <Text style={styles.facilitiesText}>Check Facilities</Text>
              <MaterialIcons name="telegram" size={24} color="#69b2f6" />
            </TouchableOpacity>
          </View>
          <View style={styles.secondRow}>
            <Ionicons name="location-outline" size={14} color="grey" />
            <Text style={styles.locationText}>Ayele, Accra</Text>
          </View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            At {hostel.name}, we're here to ensure that your first step into the university world is comfortable and unforgettable.
            Our rooms are thoughtfully designed to offer you comfort and serenity. It's not just a room; it's your haven for
            focused studying and quality downtime. Feel free to check out our facilities.
          </Text>
          <Text style={styles.sectionTitle}>Contact Info</Text>
          <View style={styles.contactContainer}>
            <Ionicons name="person-circle" size={50} color="#69b2f6" />
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactName}>Adu Kelvin</Text>
              <Text style={styles.contactTitle}>Hostel Manager</Text>
            </View>
            <Ionicons name="call" size={20} color="white" style={styles.Ion} />
            <Ionicons name="mail" size={20} color="white" style={styles.Ion} />
          </View>
        </View>
      </ScrollView>

          <Button style={{ marginVertical: 0}} mode="contained" onPress={() => navigation.navigate('RoomCapacity')}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Book</Text>
              <FontAwesome6 name="location-arrow" size={24} color="white" />
            </View>
          </Button>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centers the content horizontally
  },
  buttonText: {
    marginRight: 10, // Add space between the text and the icon
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
    color: 'white',
  },
  hostelImage: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 20,
  },
  hostelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d2e7f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  reviewText: {
    marginLeft: 5,
    color: '#69b2f6',
  },
  facilitiesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d2e7f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  facilitiesText: {
    color: '#69b2f6',
    marginRight: 5,
  },
  locationText: {
    color: 'gray',
    marginLeft: 5,
    marginTop: -3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactTextContainer: {
    marginLeft: 10,
    marginRight: 50,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactTitle: {
    fontSize: 12,
    color: 'gray',
  },
  Ion: {
    backgroundColor: '#69b2f6',
    marginHorizontal: 8,
    borderRadius: 30,
    padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,


  },
  card: {
    width: '48%',
    overflow: 'hidden',
    marginBottom: 30,
  },
  cardImage: {
    width: '101%',
    height: 100,
  },
  cardText: {
    position: 'absolute',
    top: 50,
    left: 30,
    color: 'black',
    fontWeight: '900',
    fontSize: 22,
  },
  cardPrice: {
    backgroundColor: '#69b2f6',
    color: 'white',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Hdetails;