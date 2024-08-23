import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { HostelContext, UseHostelContext } from '../Hooks/HostelContext';
const Hostel = ({ navigation }) => {
  const [likedHostels, setLikedHostels] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const hostels = useContext(UseHostelContext)


  const toggleLike = (hostelId) => {
    setLikedHostels(prevLikedHostels => ({
      ...prevLikedHostels,
      [hostelId]: !prevLikedHostels[hostelId] // Toggle the like status
    }));
  };

  // const filteredHostels = hostels.avialableHostels.filter((hostel) =>
  //     hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const navigateToHostelDetails = (hostel) => {
    console.log("hostel details", hostel);
    navigation.navigate('bookingroute', {
      screen: 'Hdetails',  // Specify the screen within the bookingroute
      params: {
        hostelDetails: hostel // Pass the hostel object directly
      }
    });
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Find hostels</Text>
          <Text style={styles.headerText}>and rooms</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
              style={styles.searchInput}
              placeholder="Search hostel and rooms"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
          />
          <Ionicons name="search" size={24} color="black" />
        </View>
        <ScrollView style={styles.verticalScrollView} contentContainerStyle={styles.contentContainer}>
          <View style={styles.grid}>
            {hostels?.avialableHostels.map(hostel => (
                <TouchableOpacity key={hostel.id} onPress={() => navigateToHostelDetails(hostel)} style={styles.card}>
                  <Image src={hostel?.hostelImage} style={styles.image} />
                  <View style={styles.infoRow}>
                    <Text style={styles.discount}>{hostel.discount}</Text>
                    <Ionicons name="star" size={20} color="gold" style={styles.icon} />
                    <Text style={styles.rating}>{hostel.rating}</Text>
                    <TouchableOpacity onPress={() => toggleLike(hostel.id)} style={{marginLeft: -10}}>
                    <Ionicons
                          name={likedHostels[hostel._id] ? "heart" : "heart-outline"}
                          size={20}
                          color={likedHostels[hostel._id] ? "red" : "#69b2f6"}
                          style={styles.icon}
                        />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.hostelName}>{hostel?.hostelName}</Text>
                
                  <Text style={styles.distance}>{hostel?.hostelLocation}</Text>
                </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.divider} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#00AEEF',
    height: '20%',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: -25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  verticalScrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f1f5fb',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  discount: {
    backgroundColor: '#d2e7f9',
    color: '#69b2f6',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  rating: {
    marginHorizontal: 5,
    color: '#69b2f6',
  },
  hostelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: 'gray',
    marginBottom: 5,
  },
  distance: {
    color: 'gray',
  },
  divider: {
    backgroundColor: '#f0f5fa',
    height: 5,
    width: '100%',
    paddingVertical: 5,

  },
});

export default Hostel;
