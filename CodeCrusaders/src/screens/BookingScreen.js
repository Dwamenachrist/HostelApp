import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from "../components/Button";

const BookingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const sampleData = {
    name: "Makassela Hostel",
    rating: 4.5,
    checkIn: "24-Oct-2023",
    checkOut: "24-Oct-2023",
    roomType: "One in a room"
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      title: "Bookings",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.bookingContainer}>
        <View>
          <Text style={styles.bookingName}>
            {sampleData.name}
          </Text>
          <View style={styles.bookingDetails}>
            <MaterialIcons name="stars" size={24} color="#ffd700" />
            <Text style={styles.bookingRating}>
              {sampleData.rating}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailTitle}>Check In</Text>
              <Text style={styles.detailValue}>{sampleData.checkIn}</Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailTitle}>Check Out</Text>
              <Text style={styles.detailValue}>{sampleData.checkOut}</Text>
            </View>
          </View>
          <View style={styles.detailColumn}>
            <Text style={styles.detailTitle}>Room Type</Text>
            <Text style={styles.detailValue}>{sampleData.roomType}</Text>
          </View>
          <Button 
          onPress={() => navigation.navigate('Summary')}
          >
            <Text style={styles.bookButtonText}>Book now</Text>
          </Button>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    marginTop: 30,
  },
  bookingContainer: {
    backgroundColor: "white",
    marginVertical: 20,
    marginHorizontal: 20,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookingName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bookingDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  bookingRating: {
    marginLeft: 5,
    fontSize: 16,
    color: "#4b4b4b",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4b4b4b",
  },
  detailValue: {
    fontSize: 14,
    color: "#007EF2",
    marginTop: 2,
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: "#0b59a1",
    paddingVertical: 0,
    borderRadius: 15,
    height: 43,
    width: 121,
    alignItems: "center",
  },
  bookButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    backgroundColor: "#fafafa",
    height: 60,
    borderBottomColor: "transparent",
    shadowColor: "transparent",
  },
});