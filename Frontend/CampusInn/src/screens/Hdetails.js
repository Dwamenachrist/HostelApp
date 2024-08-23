import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const Hdetails = ({ route }) => {
  const hostel = route.params?.hostelDetails; // Pass hostelId instead of hostel object
  console.log("hostel details from details screen", hostel);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  console.log("rooms available", JSON.stringify(hostel?.rooms));
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{uri: hostel?.hostelImage}} style={styles.hostelImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.hostelName}>{hostel?.hostelName}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.reviewContainer} onPress={() => navigation.navigate('Reviews', { hostel })}>
            <Ionicons name="star" size={20} color="gold" />
            <Text style={styles.reviewText}>{hostel.rating} (120 Reviews)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.facilitiesButton}
            onPress={() => navigation.navigate('Facilities')}>
            <Text style={styles.facilitiesText}>Check Facilities</Text>
            <MaterialIcons name="telegram" size={24} color="#69b2f6" />
          </TouchableOpacity>
        </View>
        <View style={styles.secondRow}>
          <Ionicons name="location-outline" size={14} color="grey" />
          <Text style={styles.locationText}>{hostel?.hostelLocation}</Text>
        </View>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          {hostel?.hostelDescription}
        </Text>
        <Text style={styles.sectionTitle}>Contact Info</Text>
        <View style={styles.contactContainer}>
          <Ionicons name="person-circle" size={50} color="#69b2f6" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactName}>{hostel?.managerDetails?.fullName}</Text>
            <Text style={styles.contactTitle}>Hostel Manager</Text>
          </View>
          <Ionicons name="call" size={20} color="white" style={styles.Ion} />
          <Ionicons name="mail" size={20} color="white" style={styles.Ion} />
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity style={{ marginVertical: 0 }} mode="contained" onPress={() => navigation.navigate('RoomCapacity', hostel.rooms )}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>Choose a room</Text>
        <FontAwesome6 name="location-arrow" size={24} color="white" />
      </View>
    </TouchableOpacity>
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
    justifyContent: 'center',
    backgroundColor: '#10b8e8',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  buttonText: {
    marginRight: 10,
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
    justifyContent: 'space-between',
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
    textDecorationLine: 'underline',
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